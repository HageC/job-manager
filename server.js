import express from "express";
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server is listening on port ${port}`));
