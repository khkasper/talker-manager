const express = require('express');
const { emailAuth, getToken, passwordAuth } = require('../middlewares');

const router = express.Router();

router.post('/', emailAuth(), passwordAuth(), getToken());

module.exports = router;