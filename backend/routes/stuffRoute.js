import express from "express";
import {
  RegisterStuff,
  StuffGetData,
  stuffLogin,
  stuffLogout,
} from "../controller/stuffController.js";
import { StuffAuthendicate } from "../middleware/userauthendication.js";
const router = express.Router();

router.route("/stuffRegister").post(RegisterStuff);
router.route("/stuffLogin").post(stuffLogin);
router.route("/stuffLogOut").post(stuffLogout);
router.route("/stuffgetdata").get(StuffAuthendicate, StuffGetData);

export default router;
