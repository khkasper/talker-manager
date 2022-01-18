const createTalkerRouter = require('./createTalkerRouter');
const deleteTalkerRouter = require('./deleteTalkerRouter');
const editTalkerRouter = require('./editTalkerRouter');
const getAllTalkersRouter = require('./getAllTalkersRouter');
const getTalkerByIdRouter = require('./getTalkerByIdRouter');
const loginRouter = require('./loginRouter');
const searchTalkerRouter = require('./searchTalkerRouter');

module.exports = {
  createTalkerRouter,
  deleteTalkerRouter,
  editTalkerRouter,
  getAllTalkersRouter,
  getTalkerByIdRouter,
  loginRouter,
  searchTalkerRouter,
};