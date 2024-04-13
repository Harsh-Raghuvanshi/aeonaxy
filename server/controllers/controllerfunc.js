const { UserModel } = require("../models/signupmodel");
const { AddInfo } = require("../models/addinfomodel");
const jwt = require("jsonwebtoken");
const path = require("path");
const secret_key = "###harsh@123456789@raghuvanshi###";
const {sendEmail}=require("../services/sendingmail");
function handleGetRequestAtHome(req, res) {
  res.status(200).json({ message: "hello from home page......" });
}
function handleGetRequestAtSignup(req, res) {
  res.status(200).json({ message: "hello from SignUp page......" });
}
async function handlePostRequestAtSignup(req, res) {
  try {
    let { fullName, userName, emailId, password } = req.body;
    const newData = new UserModel({
      fullName,
      userName,
      emailId,
      password,
    });
    await newData.save();
    const userId = newData._id;
    const token = jwt.sign({ fullName, userName, emailId, userId }, secret_key);
    console.log("Data added Succesfully....");
    res.status(200).json({ message: "Data added successfully .....", token });
  } catch (err) {
    console.log("Error at handlePostRequestAtSignup", err);
    res.status(500).json({ message: "Server Error ..." });
  }
}

async function handlePostRequestAtAdd(req, res) {
  try {
    console.log("request reached at backend /add successfully ");
    const token=req.headers["authorization"];
    console.log("header is : ",req.headers);
    console.log("Token is :", token);

    const result=jwt.verify(token,secret_key);
    console.log("result :",result);

    const newData = new AddInfo({
      imageUrl: req.file.path,
      location: req.body.location,
      userId: result.userId,
    });
    await newData.save();
    res.status(200).json({
      message: "request reached at backend /add successfully and data added",
    });
  } catch (err) {
    console.log("Error at handlePostRequestAtAdd", err);
    res.status(500).json({ message: "Server Error ..." });
  }
}
async function handleGetRequestAtLast(req,res){
  try{
    const token=req.headers["authorization"];
    const result=jwt.verify(token,secret_key);
    console.log("Ready to send mail at ",result.emailId);
    await sendEmail(result.emailId);
    res.status(200).json({message:"Success will be achieved in sending mail"})
  }catch(err){
    console.log("Error at handleGetRequestAtLast",err);
    res.status(500).json({ message: "Server Error while at mail verification" });
  }
}
module.exports = {
  handleGetRequestAtHome,
  handleGetRequestAtSignup,
  handlePostRequestAtSignup,
  handlePostRequestAtAdd,
  handleGetRequestAtLast,
};
