import React from 'react';
import { Box, Typography } from '@material-ui/core';

import { useStyles } from './styles';
import theme from '../../theme';

interface HeaderProps {
  score: number;
}

export const Header: React.FC<HeaderProps> = ({ score }) => {
  const classes = useStyles(theme);

  return (
    <Box className={classes.main}>
      <Box className={classes.titleBox}>
        <Typography variant='h3' className={classes.title}>
          Rock
        </Typography>
        <Typography variant='h3' className={classes.title}>
          Paper
        </Typography>
        <Typography variant='h3' className={classes.title}>
          Scissors
        </Typography>
      </Box>
      <Box className={classes.scoreBox}>
        <Typography variant='h3' className={classes.scoreTitle}>
          score
        </Typography>
        <Typography variant='h3' className={classes.score}>
          {score}
        </Typography>
      </Box>
    </Box>
  );
};
