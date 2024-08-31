import express from "express";
import { isAuthendicater } from "../middleware/authendication.js";
import { createSchedule, getSchedule } from "../controller/scheduleController.js";

const router=express.Router()

router.route('/createshedule').post(isAuthendicater,createSchedule)
router.route('/getschedule').get(isAuthendicater,getSchedule)

export default router
