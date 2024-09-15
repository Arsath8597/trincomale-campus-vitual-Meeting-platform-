import express from "express";
import userRoute from "./routes/userRoute.js"
import cookieParser from "cookie-parser";
import scheduleRouter from "./routes/scheduleRoute.js"
import cors from "cors"
const app =express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://trincomale-campus-vitual-meeting-platform.vercel.app'); // Update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Allow requests from multiple origins
const allowedOrigins = [
  'https://trincomale-campus-vitual-meeting-platform.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
app.use(cookieParser());
app.use(express.json())

app.use("/",userRoute)
app.use("/",scheduleRouter)

export default app