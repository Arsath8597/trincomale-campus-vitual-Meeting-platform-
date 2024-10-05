import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const StuffSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter the name"],
  },
  email: {
    type: String,
    required: [true, "email Required"],
    unique: true,
    validate: {
      // Correcting "validator" to "validate" for Mongoose schema
      validator: validator.isEmail,
      message: "Please enter a valid email address",
    },
  },
  password: {
    type: String,
    required: [true, "Please enter the Password"],
    select: false,
    minlength: [6, "type minumum 6 charactores"],
  },
  role: {
    type: String,
    default: "stuff",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//hash password
StuffSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    this.password = await bcrypt.hash(this.password, 10);
  } catch (error) {}
});

//create jwt token
StuffSchema.methods.genarateToken = function () {
  // Fixed typo
  const token = jwt.sign(
    // Corrected jwt=sign to jwt.sign
    { id: this._id, email: this.email, role: this.role },
    "djfkdjdss",
    { expiresIn: "1h" }
  );
  return token;
};
//compare password
StuffSchema.methods.isValidPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

const StuffModel = mongoose.model("stuff", StuffSchema);

export default StuffModel;
