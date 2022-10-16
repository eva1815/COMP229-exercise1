import { Router } from "express";

import { DisplayBusinessList, DisplayMoviesAddPage, ProcessMoviesAddPage, DisplayMoviesEditPage,ProcessMoviesEditPage, ProcessMoviesDelete } from "../controllers/business.controller.server.js";
import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/business-list', DisplayBusinessList);
router.get('/movie-add', AuthGuard, DisplayMoviesAddPage);
router.post('/movie-add', AuthGuard, ProcessMoviesAddPage);
router.post('/movie-edit/:id', AuthGuard, ProcessMoviesEditPage);
router.get('/movie-edit/:id', AuthGuard, DisplayMoviesEditPage);
router.get('/movie-delete/:id', AuthGuard, ProcessMoviesDelete);



export default router;