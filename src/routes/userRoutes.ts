import express from "express";
import { indexTodo } from "../controller/userController";

const userRoutes = express.Router();

// User routes
userRoutes.get("/users", indexTodo);

userRoutes.get("/posts", (req, res) => {
  // Handle user post listing logic
  res.send("User Posts");
});

export { userRoutes };
