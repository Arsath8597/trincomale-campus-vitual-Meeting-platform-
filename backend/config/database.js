import mongoose from "mongoose";
// import dotenv from 'dotenv'

// dotenv.config();
const connectDatabse = () => {
  mongoose
    .connect("mongodb+srv://arsath:123@cluster0.och8k.mongodb.net/Campus")
    .then(() => {
      console.log("database Connected");
    });
};
export default connectDatabse;
