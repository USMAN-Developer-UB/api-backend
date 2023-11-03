const express = require('express');
const router = express.Router();
const bahanBakuController = require('../controllers/bahan_baku')
const jwtMiddleware = require('../middleware/jwt')

router.post('/:id_ideaplan', jwtMiddleware.validateToken, bahanBakuController.create);

module.exports = router;
