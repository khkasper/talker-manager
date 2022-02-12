const express = require('express');
const rescue = require('express-rescue');
const { addTalkers, getAllTalkers } = require('../helpers');
const { tokenAuth } = require('../middlewares');

const router = express.Router();

router.delete('/:id', [
  tokenAuth,
  rescue(async (req, res) => {
    const { id } = req.params;
    const allTalkersList = await getAllTalkers();
    const filteredList = allTalkersList.filter(({ id: talkerId }) => talkerId !== +id);
    await addTalkers(filteredList);
    return res.status(204).json({ message: 'Pessoa palestrante deletada com sucesso' });
  }),
]);

module.exports = router;