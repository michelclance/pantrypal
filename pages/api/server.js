const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
import User from "../../models/users";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// Define validation middleware for the register route
const registerValidationMiddleware = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }
  if (password.length < 6) {
    return res
      .status(400)
      .send("Password must be at least 6 characters long");
  }
  next();
};

app.post("/api/register", registerValidationMiddleware, async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send("User with that email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    res.send({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// Define validation middleware for the login route
const loginValidationMiddleware = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }
  next();
};

app.post("/api/login", loginValidationMiddleware, async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).send("Invalid password");
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    res.send({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

app.get("/api/protected", authMiddleware, (req, res) => {

    // Get the user ID from the request object
    const userId = req.userData.userId;
  
    // Do something with the user ID
    res.json({ message: `User ID: ${userId}` });
  });
  
  