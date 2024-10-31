import mongoose from "mongoose";

const ScheduleShcema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: [true, "please enter the Subject"],
    },
    roomid: {
      type: String,
      required: [true, "Please enter the description"],
    },
    batch: {
      type: String,
      required: [true, "please enter the batch"],
    },
    stuff: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Stuff",
    },
    date: {
      type: String,
      required: [true, "pleasee enter the Date"],
    },
  },
  { timestamps: true }
);

const ScheduleModel = mongoose.model("Schedule", ScheduleShcema);

export default ScheduleModel;
