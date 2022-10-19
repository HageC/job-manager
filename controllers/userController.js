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

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new CustomError("Please provide all values", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new CustomError("Invalid Values", 401));
    }
    const validPassword = await user.comparePassword(password);

    if (!validPassword) {
      return next(new CustomError("Invalid Values", 401));
    }
    const token = user.generateToken();
    res.status(201).json({
      user: { email: user.email, name: user.name, location: user.location },
      token,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const { email, name, location, password } = req.body;

  if (!email || !name || !location || !password) {
    return next(new CustomError("Please provide all values", 400));
  }

  try {
    const user = await User.findOne({ _id: req.user.id }).select("+password");
    const validPassword = await user.comparePassword(password);
    if (!validPassword) {
      return next(new CustomError("Invalid Password", 401));
    }
    user.email = email;
    user.name = name;
    user.location = location;
    await user.save();
    const token = user.generateToken();
    res.status(200).json({ user, token });
  } catch (error) {
    next(error);
  }
};

export { signup, login, update };
