import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Button } from "@material-ui/core";

import { DataContext } from "../../../context/DataContext";
import { useStyles } from "./styles";

export const StartBtn = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const { setScore } = useContext(DataContext);

  const startGame = () => {
    setScore(0);
    location.pathname === "/game" && history.push("/");
  };

  return (
    <Button
      onClick={() => {
        startGame();
      }}
      className={classes.startBtn}
    >
      Sart New Match
    </Button>
  );
};
