const express = require('express');
const { emailAuth, tokenAuth, passwordAuth } = require('../middlewares');

const router = express.Router();

router.post('/', emailAuth(), passwordAuth(), tokenAuth());

module.exports = router;