import CustomError from "../error/custom-error.js";
import Job from "../models/Job.js";

const addJob = async (req, res, next) => {
  const { jobTitle, companyName } = req.body;
  if (!jobTitle || !companyName) {
    return next(new CustomError("Please enter all values", 400));
  }

  const createdJob = await Job.create({
    jobTitle,
    companyName,
    createdBy: req.user.id,
  });

  res.status(201).json({ createdJob });
};

const removeJob = async (req, res, next) => {
  const { id } = req.params;
  const job = await Job.findOne({ _id: id });

  if (!job) {
    return next(new CustomError("Job doesn't exist", 404));
  }

  if (!(req.user.id === job.createdBy.toString())) {
    return next(new CustomError("Not authorized", 401));
  }

  await job.remove();

  res.status(200).json({ message: "Job has been removed." });
};

const getJobs = async (req, res, next) => {
  const jobs = await Job.find({ createdBy: req.user.id });

  res.status(200).json({ jobs, amount: jobs.length });
};

const changeJob = async (req, res, next) => {};

const jobStats = async (req, res, next) => {};

export { addJob, removeJob, getJobs, changeJob, jobStats };
