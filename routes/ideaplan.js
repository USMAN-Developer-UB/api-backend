const express = require('express');
const router = express.Router();
const ideaPlanController = require('../controllers/ideaplan')
const jwtMiddleware = require('../middleware/jwt')

router.post('/', jwtMiddleware.validateToken, ideaPlanController.create);
router.get('/user', jwtMiddleware.validateToken, ideaPlanController.findByUser);

module.exports = router;
