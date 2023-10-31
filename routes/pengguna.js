const express = require('express');
const router = express.Router();
const penggunaController = require('../controllers/pengguna')

router.post('/register', penggunaController.create);

module.exports = router;
