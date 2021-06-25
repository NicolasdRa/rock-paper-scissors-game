import { useContext, useEffect, useState } from "react";

import { Box, Button, Typography } from "@material-ui/core";
import clsx from "clsx";

import { DataContext } from "../../context/DataContext";

import { PickBtn } from "../PickBtn/PickBtn";
import { StartBtn } from "../StartBtn/StartBtn";

import { useStyles } from "./styles";
import { Link, useHistory } from "react-router-dom";
import { calculateResult } from "../../helpers/calculateResult";

export const Game = () => {
  const classes = useStyles();
  const history = useHistory();

  const { pick, score, setScore } = useContext(DataContext);

  const [housePick, setHousePick] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    !pick && history.push("/");
    // eslint-disable-next-line
  }, [pick]);

  useEffect(() => {
    const options = ["rock", "paper", "scissors"];
    const house = options[Math.floor(Math.random() * 3)];
    setHousePick(house);
  }, [pick]);

  useEffect(() => {
    setResult(calculateResult(pick, housePick));
  }, [pick, housePick]);

  useEffect(() => {
    const scoreTimer = setTimeout(() => {
      if (result === "you win") {
        setScore(score + 1);
      } else if (result === "you lose") {
        setScore(score - 1);
      }
    }, 1000);
    return () => clearTimeout(scoreTimer);
    // eslint-disable-next-line
  }, [result]);

  useEffect(() => {
    localStorage.setItem("score", score.toString());
  }, [score]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box className={classes.main}>
      <Box className={classes.titles}>
        <Box>
          <Typography align="center" className={classes.pickTitle}>
            You Picked
          </Typography>
        </Box>
        <Box>
          <Typography align="center" className={classes.pickTitle}>
            The House Picked
          </Typography>
        </Box>
      </Box>
      <Box className={classes.content}>
        <Box className={classes.youBtn}>
          <PickBtn disabled type={pick} size="big" />
        </Box>
        <Box className={classes.resultContainer}>
          <Box
            className={clsx(classes.resultContent, {
              [classes.show]: show === true,
              [classes.hide]: show === false,
            })}
          >
            <Typography
              align="center"
              className={clsx(classes.result, {
                [classes.win]: result === "you win",
                [classes.lose]: result === "you lose",
                [classes.draw]: result === "draw",
              })}
            >
              {result}
            </Typography>
            <Button
              component={Link}
              to="/"
              variant="contained"
              className={classes.btn}
            >
              Play Again
            </Button>
          </Box>
        </Box>
        <Box className={classes.houseBtn}>
          <Box
            className={clsx(classes.hole, {
              [classes.show]: show === false,
              [classes.hide]: show === true,
            })}
          ></Box>
          <Box
            className={clsx({
              [classes.show]: show === true,
              [classes.hide]: show === false,
            })}
          >
            <PickBtn disabled type={housePick} size="big" />;
          </Box>
        </Box>
      </Box>
      <StartBtn />
    </Box>
  );
};
