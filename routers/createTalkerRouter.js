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

router.post('/', [
  tokenAuth,
  nameAuth,
  ageAuth,
  talkAuth,
  watchedAtAuth,
  rateAuth,
  rescue(async (req, res) => {
    const allTalkersList = await getAllTalkers();
    const newTalker = { ...req.body, id: allTalkersList.length + 1 };
    const updatedList = [...allTalkersList, newTalker];
    await addTalkers(updatedList);
    return res.status(201).json(newTalker);
  }),
]);

module.exports = router;