// const User = require("../models/userModel");
const {loginUser, signupUser} = require('../services/userServices');

const userLogin = async (req, res) => {
  try {
    const userLogin = await loginUser(req.body);
    const {password, ...loginData} = userLogin.matchUser.toObject();
    res.status(200).json({
      message: "User login successfully",
      user:loginData,
      token: userLogin.token
    });
  } catch (err) {
    res.status(401).json({
      message: "User login failed",
      error: err.message,
    });
  }
};
const userRegister = async (req, res) => {
  try {
    const user = await signupUser(req.body)
    const {password, ...userData} = user.toObject();
    // const { name, email, mobNumber, password } = req.body;
    // const existingUser = await User.findOne({ email});
    // if (existingUser) {
    //   return res.status(400).json({
    //     message: "User already registered plase login",
    //   });
    // }
    // const user = await User.create({ name, email, mobNumber, password });
    res.status(200).json({
      message: "User Register successfully",
      user: userData,
    });
  } catch (error) {
    res.status(500).json({
      message: "User Register failed",
      error: error.message,
    });
  }
};
module.exports = { userLogin, userRegister };
