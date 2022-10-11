import jwt from "jsonwebtoken";
import CustomError from "../error/custom-error.js";

const authenticate = async (req, res, next) => {
  const headers = req.headers;
  const tokenHeader = headers.authorization;

  if (!tokenHeader || !tokenHeader.startsWith("Bearer")) {
    return next(new CustomError("Authentication Failed", 401));
  }

  const token = tokenHeader.split(" ")[1];

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: data.userId };
    next();
  } catch (error) {
    return next(new CustomError("Authentication Failed", 401));
  }
};

export default authenticate;
