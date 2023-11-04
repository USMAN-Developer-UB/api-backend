const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../middleware/jwt')
const biayaPenyusutanController = require('../controllers/biaya_penyusutan')

router.post('/', jwtMiddleware.validateToken, biayaPenyusutanController.create);

module.exports = router;
