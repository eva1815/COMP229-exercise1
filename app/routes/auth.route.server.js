import { Router } from "express";
import { DisplayLoginPage, DisplayRegisterPage } from "../controllers/auth.controller.server.js";

const router = Router();

//Display login Router
router.get('/login', DisplayLoginPage);

//Display Register Router
router.get('/register', DisplayRegisterPage);

export default router;