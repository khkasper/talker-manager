const fs = require('fs').promises;

module.exports = async () => {
  try {
    const allTalkersList = await fs.readFile('./talker.json', 'utf-8');
    return JSON.parse(allTalkersList);
  } catch (error) {
    return null;
  }
};