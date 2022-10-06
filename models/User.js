import mongoose from "mongoose";
import validator from "validator";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please enter a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
    select: false,
  },
  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default: "",
  },
});

export default mongoose.model("User", UserSchema);
