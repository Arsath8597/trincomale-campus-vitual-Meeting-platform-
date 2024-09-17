import express from "express";
import userRoute from "./routes/userRoute.js"
import cookieParser from "cookie-parser";
import scheduleRouter from "./routes/scheduleRoute.js"

const app =express();


app.use(cookieParser());
app.use(express.json())

app.use("/",userRoute)
app.use("/",scheduleRouter)

export default app