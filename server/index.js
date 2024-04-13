const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 5000;
const router = require("./routes/router");
const { responseHeaderModifier } = require("./middlewares/headerModifier");
CONNECTION_STRING =
  "mongodb+srv://harshrghvnsh:6Nr57ICXpx8fdkhf@userdetails.eai62wh.mongodb.net/aeonaxy?retryWrites=true&w=majority&appName=UserDetails";
mongoose
  .connect(CONNECTION_STRING)
  .then(() => console.log("Connection established ..."))
  .catch(() => console.log("NO connection established ..."));
app.use(
  cors({
    origin: "https://aeonaxy-frontend-neon.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  })
);
app.use(responseHeaderModifier());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);
app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));
