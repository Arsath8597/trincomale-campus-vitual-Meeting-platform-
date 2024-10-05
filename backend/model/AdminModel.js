import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt, { compare } from "bcrypt";
import validator from "validator";

const AdminSchema = new mongoose.Schema({
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
    default: "Admin",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// hash password
AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    this.password = await bcrypt.hash(this.password, 10);
  } catch (error) {
    next(error);
  }
});

//create jwt token
AdminSchema.methods.genarateToken = function () {
  const token = jwt.sign(
    { id: this._id, email: this.email, role: this.role },
    "djfkdjdss",
    { expiresIn: "1h" }
  );
  return token;
};

// compare password
AdminSchema.methods.isValidPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

const AdminModel = mongoose.model("admin", AdminSchema);

export default AdminModel;
