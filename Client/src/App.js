import { useState } from "react";

import "./App.css";
import Modal from "./components/UI/Modal";
import SelectionGroup from "./components/selection-group/SelectionGroup";
import Result from "./components/result/Result";

function App() {
  const [isModalOPen, setIsModalOPen] = useState(false);
  const [rank, setRank] = useState(0);
  const [tryAgain, setTryAgain] = useState(false);
  const initialScoreData = {
    numberOfAnsweredQuestions: 0,
    score: 0,
  };
  const [scoreData, setScoreData] = useState(initialScoreData);

  const closeModal = () => {
    setIsModalOPen(false);
  };

  const tryAgainHandler = () => {
    setTryAgain(!tryAgain);
    setIsModalOPen(false);
    setRank(0);
    setScoreData(initialScoreData);
  };

  return (
    <>
      {isModalOPen && (
        <Modal closeModal={closeModal}>
          <Result
            score={scoreData.score}
            rank={rank}
            setRank={setRank}
            closeModal={closeModal}
            tryAgain={tryAgainHandler}
          />
        </Modal>
      )}
      <SelectionGroup
        tryAgain={tryAgain}
        rank={rank}
        setRank={setRank}
        scoreData={scoreData}
        setScoreData={setScoreData}
        setIsModalOPen={setIsModalOPen}
      />
      ;
    </>
  );
}

export default App;
