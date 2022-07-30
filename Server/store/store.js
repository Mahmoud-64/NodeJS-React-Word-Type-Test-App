const fs = require("fs");

let wordList = [];
let scoresList = [];

fs.readFile(__dirname + "/TestData.json", (err, data) => {
  if (err) throw err;
  const prasedData = JSON.parse(data);
  wordList = prasedData.wordList;
  scoresList = prasedData.scoresList;
});

const getWordList = () => {
  return wordList;
};

const getScoresList = () => {
  return scoresList;
};

module.exports = {
  getWordList,
  getScoresList,
};
