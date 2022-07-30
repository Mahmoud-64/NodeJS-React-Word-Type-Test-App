const helpers = require("../utils/helpers");

exports.getWords = (req, res, next) => {
  try {
    let words = [];
    do {
      words = helpers.getRandomWords();
    } while (!helpers.isAllWordTypesAreAdded());
    return res.status(200).json(words);
  } catch (err) {
    next(err);
  }
};

exports.getRank = (req, res, next) => {
  try {
    const score = req.body.score;
    const rank = helpers.getRank(score);
    return res.status(200).json(rank);
  } catch (err) {
    next(err);
  }
};
