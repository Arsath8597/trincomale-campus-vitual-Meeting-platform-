import express from "express";
import {
  StuffAuthendicate,
  userAuthendicate,
} from "../middleware/userauthendication.js";
import {
  createSchedule,
  getAllShcedule,
  getSchedule,
} from "../controller/scheduleController.js";

const router = express.Router();

router.route("/createshedule").post(StuffAuthendicate, createSchedule);
router.route("/getschedule").get(StuffAuthendicate, getSchedule);
router.route("/getallschedule").get(getAllShcedule);

export default router;
