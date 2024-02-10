const express = require('express');
const router = express.Router();
const routerLogin = require('./login');

// GET
router.use('/login', routerLogin);

module.exports = router;