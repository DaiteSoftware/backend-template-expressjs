import { Router } from "express";
import { login } from "../controllers/login.controller.mjs";

export const loginRouter = Router();

loginRouter.post("/login", login);

