import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
const connectDatabse =()=>{mongoose.connect(process.env.DB_LOCAL_URI).then(()=>{
    console.log("database Connected")
})}
export default connectDatabse

