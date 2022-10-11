import express from "express";
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";
import userRouter from "./routes/userRouter.js";
import jobsRouter from "./routes/jobsRouter.js";
import mongoose from "mongoose";
import authenticate from "./middleware/authenticate.js";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/user/", userRouter);
app.use("/api/jobs/", authenticate, jobsRouter);

app.use(notFound);
app.use(errorHandler);

const startUp = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startUp();
