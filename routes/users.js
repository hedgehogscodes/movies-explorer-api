const router = require('express').Router();
const { validateUserUpdate } = require('../utils/validators');

const { getUser, updateUser } = require('../controllers/users');

router.get('/me', getUser);
router.patch('/me', validateUserUpdate, updateUser);

module.exports = router;
