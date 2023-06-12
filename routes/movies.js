const router = require('express').Router();
const { validateCreateMovie, validateDeleteMovie } = require('../utils/validators');

const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');

router.get('/', getMovies);
router.post('/',  createMovie);
router.delete('/:_id', validateDeleteMovie, deleteMovie);

module.exports = router;
