import express from "express";
import {
  deleteUser,
  getAllUser,
  getUserData,
  login,
  LogOutUser,
  RegisterUser,
  updateUser,
} from "../controller/userController.js";
import { userAuthendicate } from "../middleware/userauthendication.js";
import { adminAuthendicate } from "../middleware/userauthendication.js";
const router = express.Router();

router.route("/userregister").post(RegisterUser);
router.route("/userlogin").post(login);
router.route("/userlogout").post(LogOutUser);
router.route("/getuserdata").get(userAuthendicate, getUserData);
router.route("/getalluser").get(adminAuthendicate, getAllUser);
router.route("/deleteuser/:id").delete(adminAuthendicate, deleteUser);
router.route("/updateuser/:id").put(adminAuthendicate, updateUser);

export default router;
