const createTalkerRouter = require('./createTalkerRouter');
const getAllTalkersRouter = require('./getAllTalkersRouter');
const getTalkerByIdRouter = require('./getTalkerByIdRouter');
const loginRouter = require('./loginRouter');

module.exports = {
  getAllTalkersRouter,
  getTalkerByIdRouter,
  loginRouter,
  createTalkerRouter,
};