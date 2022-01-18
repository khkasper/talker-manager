const express = require('express');
const rescue = require('express-rescue');
const { getAllTalkers } = require('../helpers');

const router = express.Router();

router.get('/', rescue(async (_req, res) => { 
  const talkersList = await getAllTalkers();
  res.status(200).json(talkersList);
}));

module.exports = router;