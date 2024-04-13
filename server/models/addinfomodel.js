const mongoose = require("mongoose");
const addInfoSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      require: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    userId:{
      type:String,
      required:true,
    }
  },
  { timestamps: true }
);

const AddInfo = mongoose.model("addinfo", addInfoSchema);
module.exports = {
  AddInfo,
};
