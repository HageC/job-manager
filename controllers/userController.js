import User from "../models/User.js";
import CustomError from "../error/custom-error.js";

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return next(new CustomError("Please provide all values", 400));
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return next(new CustomError("Email already exists", 400));
  }

  try {
    const user = await User.create({ name, email, password });
    const token = user.generateToken();
    res.status(201).json({
      user: { email: user.email, name: user.name, location: user.location },
      token,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res) => {};

const changeUser = async (req, res) => {};

export { signup, login, changeUser };
