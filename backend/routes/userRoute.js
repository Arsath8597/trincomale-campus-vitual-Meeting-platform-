import express from "express";
import {
  getAllUser,
  getUserData,
  login,
  LogOutUser,
  RegisterUser,
} from "../controller/userController.js";
import { userAuthendicate } from "../middleware/userauthendication.js";
import { adminAuthendicate } from "../middleware/userauthendication.js";
const router = express.Router();

router.route("/userregister").post(RegisterUser);
router.route("/userlogin").post(login);
router.route("/userlogout").post(LogOutUser);
router.route("/getuserdata").get(userAuthendicate, getUserData);
router.route("/getalluser").get(adminAuthendicate, getAllUser);

export default router;
