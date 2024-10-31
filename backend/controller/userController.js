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
  const { name, email, password, role, batch, course } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
      role,
      course,
      batch,
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

    // If no users are found, return an appropriate message
    if (!users || users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    }

    res.status(200).json({
      message: "Successfully fetched user data",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

//Delete User
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deleteUser = await User.findByIdAndDelete(userId);
    res.json({
      success: true,
      message: "succesfully user deeleted",
    });
    if (!deleteUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// update user
export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updateUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "user data updated",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
