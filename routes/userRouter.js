import express from "express";
import authenticate from "../middleware/authenticate.js";
import rateLimiter from "express-rate-limit";
const router = express.Router();
import { signup, login, update } from "../controllers/userController.js";
const requestLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many requests, try again.",
});
router.route("/signup").post(requestLimiter, signup);
router.route("/login").post(requestLimiter, login);
router.route("/update").patch(authenticate, update);

export default router;
