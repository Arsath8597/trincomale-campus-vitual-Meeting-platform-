import express from "express";
import {
  deleteStuff,
  getAllStuff,
  RegisterStuff,
  StuffGetData,
  stuffLogin,
  stuffLogout,
  updateStuff,
} from "../controller/stuffController.js";
import { StuffAuthendicate } from "../middleware/userauthendication.js";
const router = express.Router();

router.route("/stuffRegister").post(RegisterStuff);
router.route("/stuffLogin").post(stuffLogin);
router.route("/stuffLogOut").post(stuffLogout);
router.route("/stuffgetdata").get(StuffAuthendicate, StuffGetData);
router.route("/stuffgetalldata").get(StuffAuthendicate, getAllStuff);
router.route("/stuffdeletedata/:id").delete(StuffAuthendicate, deleteStuff);
router.route("/stuffupdatedata/:id").put(StuffAuthendicate, updateStuff);

export default router;
