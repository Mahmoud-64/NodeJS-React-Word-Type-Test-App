import { useEffect, useState } from "react";
import axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

import classes from "./SelectionGroup.module.css";
import SelectionCard from "../selection-card/SelectionCard";

const SelectionGroup = ({
  scoreData,
  setScoreData,
  setIsModalOPen,
  tryAgain,
}) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const getWords = async () => {
      setWords([]);
      try {
        const res = await axios.get("http://localhost:3200/words");
        setWords(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getWords();
  }, [tryAgain]);

  useEffect(() => {
    if (scoreData.numberOfAnsweredQuestions === 10) {
      setIsModalOPen(true);
    }
  }, [setIsModalOPen, scoreData]);

  const updateScoreHandler = (isCorrectAns) => {
    setScoreData((prev) => {
      return {
        numberOfAnsweredQuestions: prev.numberOfAnsweredQuestions + 1,
        score: isCorrectAns ? prev.score + 10 : prev.score,
      };
    });
    if (scoreData.numberOfAnsweredQuestions === 10) {
      setIsModalOPen(true);
    }
  };

  return (
    <>
      <div className={classes.progressBar}>
        <ProgressBar
          animated
          now={scoreData.numberOfAnsweredQuestions * 10}
          label={`${scoreData.numberOfAnsweredQuestions * 10}%`}
        />
      </div>
      <h6 className={classes.title}>Please select the type of each word:</h6>

      {words.map((el) => {
        return (
          <SelectionCard
            key={el.id}
            wordData={el}
            onUpdateScore={(isCorrectAns) => {
              updateScoreHandler(isCorrectAns);
            }}
          />
        );
      })}
    </>
  );
};

export default SelectionGroup;
