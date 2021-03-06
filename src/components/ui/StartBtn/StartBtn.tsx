import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Button } from "@material-ui/core";

import { DataContext } from "../../../context/DataContext";
import { useStyles } from "./styles";

export const StartBtn: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const { setScore } = useContext(DataContext);

  const handleClickStartGame = () => {
    setScore(0);
    location.pathname === "/game" && history.push("/");
  };

  return (
    <Button onClick={handleClickStartGame} className={classes.startBtn}>
      Sart New Match
    </Button>
  );
};
