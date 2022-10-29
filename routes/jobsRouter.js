import express from "express";
const router = express.Router();
import {
  addJob,
  removeJob,
  getJobs,
  jobStats,
} from "../controllers/jobsController.js";

router.route("/").post(addJob).get(getJobs);
router.route("/jobStats").get(jobStats);
router.route("/:id").delete(removeJob);

export default router;
