import express from "express";
import { getUserData, login, LogOutUser, RegisterUser } from "../controller/userController.js";
import { isAuthendicater } from "../middleware/authendication.js";
const router=express.Router();

router.route("/userregister").post(RegisterUser)
router.route("/userlogin").post(login)
router.route("/userlogout").post(LogOutUser)
router.route("/getuserdata").get(isAuthendicater,getUserData)

export default router