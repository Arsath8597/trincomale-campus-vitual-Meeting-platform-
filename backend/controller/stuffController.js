import mongoose from "mongoose";
import Stuff from "../model/stuffModel.js";

//set cookies
const cookieExpiresTime = 7;
const options = {
  expires: new Date(Date.now() + cookieExpiresTime * 24 * 60 * 60 * 1000),
  httpOnly: true,
};

//Register Function
export const RegisterStuff = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const stuff = await Stuff.create({
      name,
      email,
      password,
    });
    const token = stuff.genarateToken();
    res.status(200).json({
      message: "Succesfully Registered Stuff",
      stuff,
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

// stuff login function
export const stuffLogin = async (req, res) => {
  const { email, password } = req.body;

  if ((!email, !password)) {
    return res.status(402).json({
      message: "invalid email or password",
    });
  }
  try {
    const stuffdata = await Stuff.findOne({ email }).select("+password");
    if (!stuffdata) {
      return res.status(402).json({
        message: "invalid email or password",
      });
    }
    const isPasswordValid = await stuffdata.isValidPassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "invalid Email or Password",
      });
    }
    const token = stuffdata.genarateToken();
    res.status(200).cookie("token", token, options).json({
      message: "succesfully login stuff",
    });
  } catch (error) {
    res.status(402).json({
      message: "something went to  wrong",
      message: error.message,
    });
  }
};

//logOut Function
export const stuffLogout = (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    message: "succesfully Logout",
  });
};

// get login stuff information
export const StuffGetData = async (req, res) => {
  try {
    const stuff = await Stuff.findById(req.stuff._id);
    res.status(200).json({
      message: "Staff information retrieved successfully",
      stuff,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
