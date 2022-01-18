const fs = require('fs').promises;

module.exports = async (content) => {
  try {
    const newTalkersList = await fs.writeFile('./talker.json', JSON.stringify(content));
    return newTalkersList;
  } catch (error) {
    return null;
  }
};