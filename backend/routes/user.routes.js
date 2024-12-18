import express from "express";
import { findProfile, loginUser, register, verifyUser } from "../controllers/user.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/signup", register)
router.post("/verify", verifyUser)
router.post("/login", loginUser)
router.get("/find", isAuth, findProfile)


export default router;