// File Name: business.route.server.js
//  Student Name: Eva Fan 
//  StudentID: 301238820
// Date: October 16, 2022 
import { Router } from "express";

import { DisplayBusinessList, DisplayBusinessAddPage, ProcessBusinessAddPage, DisplayBusinessEditPage,ProcessBusinessEditPage, ProcessBusinessDelete } from "../controllers/business.controller.server.js";
import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/business-list', DisplayBusinessList);
router.get('/business-add', AuthGuard, DisplayBusinessAddPage);
router.post('/business-add', AuthGuard, ProcessBusinessAddPage);
router.post('/business-edit/:id', AuthGuard, ProcessBusinessEditPage);
router.get('/business-edit/:id', AuthGuard, DisplayBusinessEditPage);
router.get('/business-delete/:id', AuthGuard, ProcessBusinessDelete);



export default router;