import Schedule from "../model/ScheduleModel.js";

export const createSchedule = async (req, res) => {
  const { subject, roomid, batch, date } = req.body;
  try {
    const schedule = await Schedule.create({
      subject,
      roomid,
      batch,
      stuff: req.stuff.id,
      date,
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

// get spacific stuff order

export const getSchedule = async (req, res) => {
  const schedule = await Schedule.find({ stuff: req.stuff.id });
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




export const getAllShcedule = async (req, res) => {
  try {
    const schedule = await Schedule.find();

    // If no schedule are found, return an appropriate message
    if (!schedule || schedule.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No schedule found",
      });
    }

    res.status(200).json({
      message: "Successfully fetched user data",
      data: schedule,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
