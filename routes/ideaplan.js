const express = require('express');
const router = express.Router();
const ideaPlanController = require('../controllers/ideaplan')
const jwtMiddleware = require('../middleware/jwt')

router.post('/', jwtMiddleware.validateToken, ideaPlanController.create);
router.get('/user', jwtMiddleware.validateToken, ideaPlanController.findByUser);
// find All
router.get('/mentor', jwtMiddleware.validateTokenAdmin, ideaPlanController.findByUser);
// find By ID
router.get('/pengguna/:id', jwtMiddleware.validateToken, ideaPlanController.findByUser);
router.get('/mentor/:id', jwtMiddleware.validateTokenAdmin, ideaPlanController.findByUser);


module.exports = router;
