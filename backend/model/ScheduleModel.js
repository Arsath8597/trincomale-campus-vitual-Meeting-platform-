import mongoose from "mongoose";

const ScheduleShcema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: [true, "please enter the Subject"],
    },
    descrition: {
      type: String,
      required: [true, "Please enter the description"],
    },
    batch: {
      type: String,
      required: [true, "please enter the batch"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

const ScheduleModel = mongoose.model("Schedule", ScheduleShcema);

export default ScheduleModel;
