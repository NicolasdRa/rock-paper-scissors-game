import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Hidden,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import clsx from "clsx";

import { DataContext } from "../../../context/DataContext";

import { Header } from "../../ui/Header/Header";
import { Footer } from "../../ui/Footer/Footer";
import { PickBtn } from "../../ui/PickBtn/PickBtn";

import { calculateResult } from "../../../helpers/calculateResult";

import { useStyles } from "./styles";

export const Game = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

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
    <Box className={classes.gameMain}>
      <Header />
      <Box className={classes.gameContent}>
        <Hidden smDown>
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
        </Hidden>

        <Box className={classes.content}>
          <Box className={classes.youBtn}>
            <PickBtn disabled type={pick} size="big" />
          </Box>
          <Hidden smDown>
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
          </Hidden>
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
        {matches && (
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
        )}
        {matches && (
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
        )}
      </Box>
      <Footer />
    </Box>
  );
};
