import express from "express";
import userRoute from "./routes/userRoute.js"
import cookieParser from "cookie-parser";
import scheduleRouter from "./routes/scheduleRoute.js"
import dotenv from 'dotenv';
import cors from "cors"
import connectDatabse from './config/database.js';

const app =express();
app.use(cookieParser());
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
dotenv.config({path:"config/config.env"})
connectDatabse()
app.listen(process.env.PORT, () => {
  console.log(`Server listening to Port ${process.env.PORT}`);
});

app.use("/",userRoute)
app.use("/",scheduleRouter)

export default app