import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
import Admin from "../model/AdminModel.js";
import Stuff from "../model/stuffModel.js";
//protect the route
export const userAuthendicate = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(402).json({
        message: "Login First",
      });
    }
    const decoded = jwt.verify(token, "fjdjmdklfd");
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    res.status(400).json({
      message: "login first after",
      message: error.message,
    });
  }
};
//admin product Route
export const adminAuthendicate = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(402).json({
        message: "login first",
      });
    }
    const decoded = jwt.verify(token, "djfkdjdss");
    req.admin = await Admin.findById(decoded.id);
    next();
  } catch (error) {
    res.status(400).json({
      message: "login first after",
      message: error.message,
    });
  }
};
//Stuff product Route
export const StuffAuthendicate = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(402).json({
        message: "login first",
      });
    }
    const decoded = jwt.verify(token, "djfkdjdss");
    req.stuff = await Stuff.findById(decoded.id);
    next();
  } catch (error) {
    res.status(400).json({
      message: "login first after",
      message: error.message,
    });
  }
};
