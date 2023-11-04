const express = require('express');
const router = express.Router();
const tenagaKerjaController = require('../controllers/tenaga_kerja')
const jwtMiddleware = require('../middleware/jwt')

router.post('/',jwtMiddleware.validateToken, tenagaKerjaController.create);

module.exports = router;
