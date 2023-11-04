const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../middleware/jwt')
const bahanBakuController = require('../controllers/bahan_baku')

router.post('/:id_ideaplan', jwtMiddleware.validateToken, bahanBakuController.create);

module.exports = router;
