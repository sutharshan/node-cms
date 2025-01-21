import express from "express";
import { registerUser } from "../Controllers/user.js";

const router = express.Router();

router.post("/user/new", registerUser);

export default router;