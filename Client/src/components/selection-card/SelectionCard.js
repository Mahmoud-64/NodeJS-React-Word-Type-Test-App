import { useState } from "react";

import Card from "../UI/Card";
import classes from "./SelectionCard.module.css";

 const  SelectionCard = ({wordData,onUpdateScore }) => {
 
  const [chosenAnswer, setChosenAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const selectWordTypeHandler = (event, type) => {
    event.preventDefault();
    setChosenAnswer(type);
    const isCorrect = type === wordData.pos
    onUpdateScore(isCorrect)
    isCorrect?setIsAnswerCorrect(true):setIsAnswerCorrect(false)
  };

  const nounButtonClasses = `${classes.actions} ${chosenAnswer === "noun" ? classes.chosenAnswer : null
    }
  ${chosenAnswer ? classes.noHover : null}
  `;
  const verbButtonClasses = `${classes.actions} ${chosenAnswer === "verb" ? classes.chosenAnswer : null
    }
  ${chosenAnswer ? classes.noHover : null}
  `;
  const adjectiveButtonClasses = `${classes.actions} ${chosenAnswer === "adjective" ? classes.chosenAnswer : null
    }
  ${chosenAnswer ? classes.noHover : null}
  `;
  const adverbButtonClasses = `${classes.actions} ${chosenAnswer === "adverb" ? classes.chosenAnswer : null
    }
  ${chosenAnswer ? classes.noHover : null}
  `;

  return (
    <Card>
      <p className={classes.word}> {wordData.word}:</p>
      <div className={classes.actions}>
        <button
          disabled={chosenAnswer}
          className={nounButtonClasses}
          onClick={(event) => {
            selectWordTypeHandler(event, "noun");
          }}
        >
          Noun
        </button>
        <button
          disabled={chosenAnswer}
          className={verbButtonClasses}
          onClick={(event) => {
            selectWordTypeHandler(event, "verb");
          }}
        >
          Verb
        </button>
        <button
          disabled={chosenAnswer}
          className={adjectiveButtonClasses}
          onClick={(event) => {
            selectWordTypeHandler(event, "adjective");
          }}
        >
          Adjective
        </button>
        <button
          disabled={chosenAnswer}
          className={adverbButtonClasses}
          onClick={(event) => {
            selectWordTypeHandler(event, "adverb");
          }}
        >
          Adverb
        </button>
      </div>
      {chosenAnswer && isAnswerCorrect && <p className={classes.correctAnswer}>Correct answer</p>}
      {chosenAnswer && !isAnswerCorrect && <p className={classes.wrongAnswer}>Wrong answer</p>}
    </Card>
  );
}

export default SelectionCard
