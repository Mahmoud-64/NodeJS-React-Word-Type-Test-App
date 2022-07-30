const store = require("../store/store");

// this vector is used to ensure that the returned 10 words contains all words types (noun, verb, adverb, adjective)
let wordTypesVector = { noun: 0, verb: 0, adjective: 0, adverb: 0 };

// this function will return 10 random words from all words types(noun, verb, adverb, adjective)
const getRandomWords = () => {
  wordTypesVector = { noun: 0, verb: 0, adjective: 0, adverb: 0 };
  const shuffledWordList = store.getWordList().sort(() => 0.5 - Math.random());
  selectedWords = shuffledWordList.slice(0, 10);
  setWordTypesVector(selectedWords);
  return selectedWords;
};

// this function is used to updat the words vector according to chosen 10 words types
const setWordTypesVector = (elements) => {
  wordTypesVector = { noun: 0, verb: 0, adjective: 0, adverb: 0 };
  elements.forEach((elem) => {
    wordTypesVector[elem.pos] == 0 ? (wordTypesVector[elem.pos] = 1) : null;
  });
};

// this function is used to check that all words types are included in the chosen 10 words
const isAllWordTypesAreAdded = () => {
  return (
    wordTypesVector["noun"] &&
    wordTypesVector["verb"] &&
    wordTypesVector["adjective"] &&
    wordTypesVector["adverb"]
  );
};

const getRank = (score) => {
  const allScores = store.getScoresList();
  let overrtakenScoresCount = 0;
  for (const _score of allScores) {
    if (score > _score) overrtakenScoresCount++;
  }
  const rank = (overrtakenScoresCount / allScores.length) * 100;
  const roundedRank = Math.round(rank * 100) / 100;
  return roundedRank;
};

module.exports = {
  getRandomWords,
  isAllWordTypesAreAdded,
  getRank,
};
