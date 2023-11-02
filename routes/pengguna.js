const express = require('express');
const router = express.Router();
const penggunaController = require('../controllers/pengguna')
const jwtMiddleware = require('../middleware/jwt')

router.post('/register', penggunaController.create);
router.post('/login', penggunaController.login);
router.get('/profile', jwtMiddleware.validateToken, penggunaController.profile);

module.exports = router;
