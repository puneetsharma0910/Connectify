import User from "../models/user.model.js";
import httpStatus from "http-status";
import bcrypt, { hash } from "bcrypt";

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: "Please provide valid creaqdentials" });
    }
    if (bcrypt.compare(password, username.password)) {
      let token = crypto.randomBytes(32).toString("hex");
      username.token - token;
      await User.save();
      return res
        .status(httpStatus.OK)
        .json({ message: "Login successful", token: token });
    }
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong ${error}` });
  }
};

const register = async (req, res) => {
  const { name, username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res
        .status(httpStatus.FOUND)
        .json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: name,
      username: username,
      password: hashedPassword,
    });

    await newUser.save();
    return res
      .satus(httpStatus.CREATED)
      .json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong ${error}` });
  }
};
