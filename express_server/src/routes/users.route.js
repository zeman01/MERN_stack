import express from "express";

const router = express.Router();

import {
  getAll,
  getById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controllers.js";

router.get("/", getAll);

router.get("/:id", getById);

router.post("/:id", createUser);

export default router;
