import express from "express";
import { userAuthendicate } from "../middleware/userauthendication.js";
import {
  createSchedule,
  getSchedule,
} from "../controller/scheduleController.js";

const router = express.Router();

router.route("/createshedule").post(userAuthendicate, createSchedule);
router.route("/getschedule").get(getSchedule);

export default router;
