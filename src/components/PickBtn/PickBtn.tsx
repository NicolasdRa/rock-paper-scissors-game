import React, { useContext } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { DataContext } from "../../context/DataContext";
import { Box, IconButton } from "@material-ui/core";
import rockImg from "../../icons/icon-rock.svg";
import paperImg from "../../icons/icon-paper.svg";
import scissorsImg from "../../icons/icon-scissors.svg";

import { useStyles } from "./styles";

interface Props {
  type: string;
  size?: string;
}

export const PickBtn: React.FC<Props> = ({ type, size }) => {
  const classes = useStyles();

  const { setPick } = useContext(DataContext);

  const getImg = (type: string): any => {
    if (type === "rock") {
      return rockImg;
    } else if (type === "paper") {
      return paperImg;
    } else if (type === "scissors") return scissorsImg;
  };

  return (
    <Box className={classes.main}>
      <IconButton
        onClick={() => setPick(type)}
        component={Link}
        to="/game"
        className={clsx(classes.btn, {
          [classes.btnRock]: type === "rock",
          [classes.btnPaper]: type === "paper",
          [classes.btnScissors]: type === "scissors",

          [classes.btnRockBig]: type === "rock" && size === "big",
          [classes.btnPaperBig]: type === "paper" && size === "big",
          [classes.btnScissorsBig]: type === "scissors" && size === "big",
          [classes.btnBig]: size === "big",
        })}
      >
        <Box
          className={clsx(classes.iconContainer, {
            [classes.iconContainerBig]: size === "big",
          })}
        >
          <img
            src={getImg(type)}
            alt="pick btn"
            className={clsx(classes.icon, {
              [classes.iconBig]: size === "big",
            })}
          />
        </Box>
      </IconButton>
    </Box>
  );
};
