import express from "express";
import userRoute from "./routes/userRoute.js"
import cookieParser from "cookie-parser";
import scheduleRouter from "./routes/scheduleRoute.js"
import cors from "cors"
const app =express();
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json())

app.use("/",userRoute)
app.use("/",scheduleRouter)

export default app