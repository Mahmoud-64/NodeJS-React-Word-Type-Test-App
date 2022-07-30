const { body } = require("express-validator");

exports.scoreValidator = () => {
  return [validateScoreBody()];
};

function validateScoreBody() {
  return body("score").exists().isInt({ min: 0, max: 100 });
}
