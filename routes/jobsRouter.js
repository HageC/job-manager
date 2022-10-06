import express from "express";
const router = express.Router();
import {
  addJob,
  removeJob,
  getJobs,
  changeJob,
  jobStats,
} from "../controllers/jobsController.js";

router.route("/").post(addJob).get(getJobs);
router.route("/jobStats").post(jobStats);
router.route("/:userID").delete(removeJob).patch(changeJob);

export default router;
