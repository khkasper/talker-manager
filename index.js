const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const {
  createTalkerRouter,
  deleteTalkerRouter,
  editTalkerRouter,
  getAllTalkersRouter,
  getTalkerByIdRouter,
  loginRouter,
} = require('./routers');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker',
  getAllTalkersRouter,
  getTalkerByIdRouter,
  createTalkerRouter,
  editTalkerRouter,
  deleteTalkerRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log('Online');
});
