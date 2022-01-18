const express = require('express');
const rescue = require('express-rescue');
const { getAllTalkers } = require('../helpers');
const { tokenAuth } = require('../middlewares');

const router = express.Router();

router.get('/', [
  tokenAuth(),
  rescue(async (req, res) => {
    const { q } = req.query;
    const allTalkersList = await getAllTalkers();
    const searchedTalker = allTalkersList.filter(({ name }) => name.includes(q));
    if (!q) return res.status(200).json(allTalkersList);
    return res.status(200).json(searchedTalker);
  }),
]);

module.exports = router;