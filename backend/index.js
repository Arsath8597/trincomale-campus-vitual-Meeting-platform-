import express from "express";
import userRoute from "./routes/userRoute.js"
import cookieParser from "cookie-parser";
import scheduleRouter from "./routes/scheduleRoute.js"
import cors from "cors"
const app =express();
app.use(cors(
    {
        origin:["https://trincomale-campus-vitual-meeting-platform.vercel.app/"],
        methods:["POST","GET"],
        credentials:true
    }
))
app.use(cookieParser());
app.use(express.json())
app.use("/",(req,res)=>{
    res.send("hello")
})
app.use("/",userRoute)
app.use("/",scheduleRouter)

export default app