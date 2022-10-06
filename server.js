import express from "express";
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";
import mongoose from "mongoose";
import "dotenv/config";
import { start } from "repl";
const app = express();
const port = process.env.PORT || 3000;

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
