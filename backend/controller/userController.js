import mongoose from "mongoose";
import User from "../model/userModel.js";

//set Cookie
const cookieExpiresTime = 7;
const options = {
  expires: new Date(Date.now() + cookieExpiresTime * 24 * 60 * 60 * 1000),
  httpOnly: true,
};
// Register function
export const RegisterUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
      role,
    });
    const token = user.genarateToken();
    res.status(200).json({
      message: "succesfully Registered User",
      user,
      token,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: "email already taken",
      });
    }
    res.status(400).json({
      message: "soemthing went to wrong",
      error: error.message,
    });
  }
};

// login Function
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "invalid Email or Password",
    });
  }
  try {
    const userdata = await User.findOne({ email }).select("+password");
    if (!userdata) {
      return res.status(400).json({
        message: "invalid email or password",
      });
    }

    const isPasswordValid = await userdata.isValidPassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "invalid Email or password",
      });
    }
    const token = userdata.genarateToken();
    res.status(200).cookie("token", token, options).json({
      message: "succsfully login user",
    });
  } catch (error) {
    res.status(402).json({
      message: "something went to  wrong",
      message: error.message,
    });
  }
};

//logOut Function
export const LogOutUser = (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    message: "succesfully LogOut",
  });
};

//get user information
export const getUserData = async (req, res) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    message: "get USer Information",
    user,
  });
};

//get all user information
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "succesfully get user data",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching users",
      error: error.message,
    });
  }
};
