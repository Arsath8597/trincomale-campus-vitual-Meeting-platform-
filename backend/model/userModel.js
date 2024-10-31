import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter the name"],
  },
  email: {
    type: String,
    required: [true, "please enter the Email"],
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

    required: [true, "role requiest"],
  },
  course: {
    type: String,
    required: [true, "please enter the course"],
  },
  batch: {
    type: Number,
    required: [true, "Batch Requires"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// hash password

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});

// crreate jwt token
userSchema.methods.genarateToken = function () {
  const token = jwt.sign(
    { id: this._id, email: this.email, roll: this.role },
    "fjdjmdklfd",
    { expiresIn: "1h" }
  );
  return token;
};

//compare password
userSchema.methods.isValidPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

const user = mongoose.model("User", userSchema);

export default user;
