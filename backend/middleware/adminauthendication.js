import jwt from "jsonwebtoken";
import Admin from "../model/AdminModel";

export const adminAuthendicate = async (req, res) => {
  try {
    const { toekn } = req.cookies;
    if (!toekn) {
      return res.status(402).json({
        message: "login first",
      });
    }
    const decoded = jwt.verify(toekn, "djfkdjdss");
    req.admin = await Admin.findById(decoded.id);
    next();
  } catch (error) {
    res.status(400).json({
      message: "login first after",
      message: error.message,
    });
  }
};
