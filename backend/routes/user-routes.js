

import express from "express";
import { getAllUser, login, signup } from "../controllers/user-controller";
import { checkEmailExists, resetPasswordController } from "../controllers/user-controller";

const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", signup);
router.post("/login", login);
router.post("/check-email", checkEmailExists);
router.post("/reset-password", resetPasswordController); // Add this line for password reset

export default router;




