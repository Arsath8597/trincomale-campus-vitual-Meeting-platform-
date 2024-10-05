import Schedule from "../model/ScheduleModel.js";

export const createSchedule = async (req, res) => {
  const { subject, descrition, batch } = req.body;
  try {
    const schedule = await Schedule.create({
      subject,
      descrition,
      batch,
      user: req.user.id,
    });
    res.status(200).json({
      message: "succsfully add shedule",
      schedule,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// get spacific user order

export const getSchedule = async (req, res) => {
  const schedule = await Schedule.find({ user: req.user.id });
  if (!schedule) {
    res.status(401).json({
      message: "Schedule not found",
    });
  }
  res.status(200).json({
    message: "succesfully get data",
    schedule,
  });
};
