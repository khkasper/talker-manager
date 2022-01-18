module.exports = () => (req, res, next) => {
  const { email } = req.body;
  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }

  if (!email.match(emailRx)) {
    return res.status(400).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }

  next();
};