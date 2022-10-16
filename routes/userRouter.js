import express from "express";
import authenticate from "../middleware/authenticate.js";
const router = express.Router();
import { signup, login, update } from "../controllers/userController.js";
router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/update").patch(authenticate, update);

export default router;
