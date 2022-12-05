const router = require('express').Router();
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');
const { login, createUser } = require('../controllers/users');
const NotFoundError = require('../utils/errors/NotFoundError');
const { validateCreateUser, validateLogin } = require('../utils/validators');
const { ERROR_MESSAGES } = require('../utils/constants');

router.post('/signup', validateCreateUser, createUser);
router.post('/signin', validateLogin, login);
router.use(auth);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('/*', () => {
  throw new NotFoundError(ERROR_MESSAGES.notFound.messageDefault);
});

module.exports = router;
