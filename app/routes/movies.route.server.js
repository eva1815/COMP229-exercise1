import { Router } from "express";

import { DisplayMoviesList, DisplayMoviesAddPage } from "../controllers/movies.controller.server.js";

const router = Router();

router.get('/movie-list', DisplayMoviesList);
router.get('/movie-add', DisplayMoviesAddPage);


export default router;