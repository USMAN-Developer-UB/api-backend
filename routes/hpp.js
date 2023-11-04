const express = require("express");
const router = express.Router();
const jwtMiddleware = require("../middleware/jwt");
const hppController = require("../controllers/hpp");

router.post("/", jwtMiddleware.validateToken, hppController.create);

module.exports = router;
