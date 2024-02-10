const { Router } = require('express')
const { check } = require('express-validator');

const { checkHealth } = require('../Controllers/login');
const { validateAtributes } = require('../Middlewares/validate-attributes');

const router = Router();

router.get('/health', checkHealth);

module.exports = router;