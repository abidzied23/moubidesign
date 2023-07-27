import { Router } from "express";
import { login, signUp } from "../controllers/authcontrol.js";

const authRouter = Router();
authRouter.post("/login", login);
authRouter.post("/contact", signUp);
export default authRouter;