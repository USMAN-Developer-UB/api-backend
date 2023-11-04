const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../middleware/jwt')
const pertanyaanJawabanController = require('../controllers/pertanyaan_jawaban')

router.post('/jawaban', jwtMiddleware.validateToken, pertanyaanJawabanController.createJawaban);
router.get('/pertanyaan/:tipe', jwtMiddleware.validateToken, pertanyaanJawabanController.showPertanyaanByTipe)

module.exports = router
