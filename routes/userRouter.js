import express from "express";
const router = express.Router();
import { signup, login, changeUser } from "../controllers/userController.js";
router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/changeuser").post(changeUser);

export default router;
