import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: [true, "Please enter the job title"],
      maxlength: 30,
    },
    companyName: {
      type: String,
      required: [true, "Please provide company name"],
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "internship"],
      default: "full-time",
    },
    location: {
      type: String,
      default: "",
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please enter user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
