const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../middleware/jwt')
const biayaOverheadController = require('../controllers/biaya_overheads')

router.post('/', jwtMiddleware.validateToken, biayaOverheadController.create);

module.exports = router;
