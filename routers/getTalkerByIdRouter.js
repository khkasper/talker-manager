const express = require('express');
const rescue = require('express-rescue');
const { getAllTalkers } = require('../helpers');

const router = express.Router();

router.get('/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const talkersList = await getAllTalkers();
  const talkerById = talkersList.find(({ id: talkerId }) => talkerId === +id);

  if (!talkerById) { 
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  res.status(200).send(talkerById);
}));

module.exports = router;