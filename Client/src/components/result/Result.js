import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";

import Card from "../UI/Card";
import classes from "./Result.module.css";

const Result = ({ score, rank, setRank, closeModal, tryAgain }) => {

  useEffect(() => {
    const getRank = async () => {
      const response = await axios.post(
        "http://localhost:3200/rank",{score}
      );
      setRank(response.data);
    };
      getRank();
  }, [setRank,  score]);
  
  return (
    <Card>
      <p>Your score: {score}</p>
      <p>Your rank: {rank}</p>
      <Button onClick={closeModal} className={classes.okButton} variant="outline-primary">Ok</Button>
      <Button onClick={tryAgain} variant="outline-primary">Try Again</Button>
    </Card>
  );
};

export default Result;
