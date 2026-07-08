const User = require("../models/User");
const { createToken } = require("../utils/token");
const { success } = require("../utils/response");

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(409);
      throw new Error("Email already registered");
    }

    const user = await User.create({ name, email, password });
    const token = createToken(user._id);

    return success(res, 201, "User registered successfully", {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.comparePassword(password))) {
      res.status(401);
      throw new Error("Invalid email or password");
    }

    const token = createToken(user._id);

    return success(res, 200, "Login successful", {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.profile = async (req, res) => {
  return success(res, 200, "Profile fetched successfully", {
    user: req.user
  });
};
