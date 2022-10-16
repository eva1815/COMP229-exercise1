import { Router } from "express";
import { DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage } from "../controllers/auth.controller.server.js";

const router = Router();

//Display login Router
router.get('/login', DisplayLoginPage);
//process login page
router.post('/login', ProcessLoginPage);

//Display Register Router
router.get('/register', DisplayRegisterPage);
//process registration page
router.post('/register', ProcessRegisterPage);

//process logout page
router.get('/logout', ProcessLogoutPage);



export default router;