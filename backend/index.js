import express from "express";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import scheduleRouter from "./routes/scheduleRoute.js";
import adminRouter from "./routes/adminRoute.js";
import stuffRouter from "./routes/stuffRoute.js";

import cors from "cors";
import connectDatabse from "./config/database.js";

const app = express();
app.use(cookieParser());
app.use(express.json());
// app.use(cors({
//   origin: 'https://trincomale-campus-vitual-meeting-platform.vercel.app',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true,
// }));
// dotenv.config({path:"config/config.env"})
connectDatabse();
app.listen(8000, () => {
  console.log(`Server listening to Port 8000`);
});

app.use("/", userRoute);
app.use("/", scheduleRouter);
app.use("/", adminRouter);
app.use("/", stuffRouter);

export default app;
