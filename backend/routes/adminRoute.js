import express from "express";
import {
  loginAdmin,
  logoutAdmin,
  RegisterAdmin,
} from "../controller/AdminController.js";

const router = express.Router();

router.route("/adminregister").post(RegisterAdmin);
router.route("/adminlogin").post(loginAdmin);
router.route("/adminlogout").post(logoutAdmin);

export default router;
