const crypto = require('crypto');

module.exports = () => (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token });
};

// https://www.w3schools.com/nodejs/ref_crypto.asp