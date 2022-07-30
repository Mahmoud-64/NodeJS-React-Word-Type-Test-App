const express = require("express");
const wordsController = require("../controllers/words");
const validatorErrorHandler = require("../middleware/validator-error-handler");
const validators = require("../validators/score-validator");

const router = express.Router();

router.get("/words", wordsController.getWords);
/*
  note: i used post request method here because it is required to send payload in
  request body in the task document and it is bad practice to send get request with body
*/
router.post(
  "/rank",
  validators.scoreValidator(),
  validatorErrorHandler,
  wordsController.getRank
);

module.exports = router;
