import mongoose from "mongoose";
import CustomError from "../error/custom-error.js";
import Job from "../models/Job.js";

const addJob = async (req, res, next) => {
  const { jobTitle, companyName } = req.body;
  if (!jobTitle || !companyName) {
    return next(new CustomError("Please enter all values", 400));
  }

  req.body.createdBy = req.user.id;

  try {
    const createdJob = await Job.create(req.body);
    res.status(201).json({ createdJob });
  } catch (error) {
    next(error);
  }
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
  try {
    await job.remove();
    res.status(200).json({ message: "Job has been removed." });
  } catch (error) {
    next(error);
  }
};

const getJobs = async (req, res, next) => {
  const { page } = req.query;
  if (page < 1) {
    return next(new CustomError("Page doesn't exist", 404));
  }
  const skip = (page - 1) * 10;

  try {
    const jobs = await Job.find({ createdBy: req.user.id })
      .skip(skip)
      .limit(10);
    const jobsCount = await Job.countDocuments({ createdBy: req.user.id });
    const pageCount = Math.ceil(jobsCount / 10);

    res.status(200).json({ jobs, jobsCount, pageCount });
  } catch (error) {
    next(error);
  }
};

const changeJob = async (req, res, next) => {
  const { id } = req.params;
  const { companyName, jobTitle } = req.body;

  if (!jobTitle || !companyName) {
    return next(CustomError("Please enter all values", 401));
  }
  const job = await Job.findOne({ _id: id });

  if (!job) {
    return next(new CustomError(`Couldn't find job:${id}`, 404));
  }
  try {
    const newJob = await Job.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ newJob });
  } catch (error) {
    next(error);
  }
};

const jobStats = async (req, res, next) => {
  try {
    let stats = await Job.aggregate([
      { $match: { createdBy: mongoose.Types.ObjectId(req.user.id) } },
      { $group: { _id: "$status", count: { $sum: 1 } } },
    ]);

    stats = stats.reduce((total, current) => {
      const { _id: title, count } = current;
      total[title] = count;
      return total;
    }, {});

    const jobStats = {
      pending: stats.pending || 0,
      interview: stats.interview || 0,
      declined: stats.declined || 0,
    };
    res.status(200).json({ jobStats });
  } catch (error) {
    next(error);
  }
};

export { addJob, removeJob, getJobs, changeJob, jobStats };
