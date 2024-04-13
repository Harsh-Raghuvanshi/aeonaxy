const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  handleGetRequestAtHome,
  handleGetRequestAtSignup,
  handlePostRequestAtSignup,
  handlePostRequestAtAdd,
  handleGetRequestAtLast,
} = require("../controllers/controllerfunc");

const currentFilePath = __filename;
const currentDirectory = path.dirname(currentFilePath);


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(currentDirectory,'../uploads'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.get("/", handleGetRequestAtHome);
router
  .route("/signup")
  .get(handleGetRequestAtSignup)
  .post(handlePostRequestAtSignup);
router.put("/add", upload.single("avatar"), handlePostRequestAtAdd);
router.get("/last",handleGetRequestAtLast);
module.exports = router;
