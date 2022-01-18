const express = require('express');
const rescue = require('express-rescue');
const { addTalkers, getAllTalkers } = require('../helpers');
const {
  ageAuth,
  nameAuth,
  rateAuth,
  talkAuth,
  tokenAuth,
  watchedAtAuth,
} = require('../middlewares');

const router = express.Router();

router.put('/:id', [
  tokenAuth(),
  nameAuth(),
  ageAuth(),
  talkAuth(),
  watchedAtAuth(),
  rateAuth(),
  rescue(async (req, res) => {
    const { id } = req.params;
    const allTalkersList = await getAllTalkers();
    const filteredList = allTalkersList.filter(({ id: talkerId }) => talkerId !== +id);
    const updatedTalker = { ...req.body, id: +id };
    const updatedList = [...filteredList, updatedTalker];
    await addTalkers(updatedList);
    return res.status(200).json(updatedTalker);
  }),
]);

module.exports = router;