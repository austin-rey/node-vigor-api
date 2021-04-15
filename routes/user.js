const express = require('express');
const { register, login, calendar } = require('../controllers/user');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.route('/calendar/:month/:year').get(protect, calendar);

module.exports = router;
