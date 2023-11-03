const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role')
const jwtMiddleware = require('../middleware/jwt')

router.get('/', roleController.findAll);
module.exports = router;
