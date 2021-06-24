import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import { Box, Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import theme from "../../theme";

export const Header: React.FC = () => {
  const classes = useStyles(theme);

  const { score } = useContext(DataContext);

  return (
    <Box className={classes.main}>
      <Box className={classes.titleBox}>
        <Typography variant="h3" className={classes.title}>
          Rock
        </Typography>
        <Typography variant="h3" className={classes.title}>
          Paper
        </Typography>
        <Typography variant="h3" className={classes.title}>
          Scissors
        </Typography>
      </Box>
      <Box className={classes.scoreBox}>
        <Typography variant="h3" className={classes.scoreTitle}>
          score
        </Typography>
        <Typography variant="h3" className={classes.score}>
          {score}
        </Typography>
      </Box>
    </Box>
  );
};
