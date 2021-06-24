import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { Box, Button, Typography } from "@material-ui/core";

import { PickBtn } from "../PickBtn/PickBtn";

import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import { calculateResult } from "../../helpers/calculateResult";

export const Game = () => {
  const classes = useStyles();

  const { pick, score, setScore } = useContext(DataContext);

  const [housePick, setHousePick] = useState("");

  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    const options = ["rock", "paper", "scissors"];
    const house = options[Math.floor(Math.random() * 3)];
    setHousePick(house);
  }, [pick]);

  useEffect(() => {
    setResult(calculateResult(pick, housePick));
  }, [pick, housePick]);

  useEffect(() => {
    if (result === "you win") {
      setScore(score + 1);
    } else if (result === "you lose") {
      setScore(score - 1);
    }
  }, [result]);

  return (
    <Box className={classes.main}>
      <Box className={classes.you}>
        <Typography className={classes.pickTitle}>You Picked</Typography>
        <PickBtn type={pick} size="big" />
      </Box>
      <Box className={classes.resultContainer}>
        <Typography className={classes.result}>{result}</Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          className={classes.btn}
        >
          {" "}
          Play Again
        </Button>
      </Box>
      <Box className={classes.house}>
        <Typography className={classes.pickTitle}>The House Picked</Typography>
        <PickBtn type={housePick} size="big" />;
      </Box>
    </Box>
  );
};
