import React from 'react';
import { Box } from '@material-ui/core';

import { PickBtn } from '../PickBtn/PickBtn';

import triangle from '../../icons/bg-triangle.svg';

import { useStyles } from './styles';

export const Board = () => {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <Box className={classes.btnRock}>
        <PickBtn type='rock' />
      </Box>
      <Box className={classes.btnPaper}>
        <PickBtn type='paper' />
      </Box>
      <Box className={classes.btnScissors}>
        <PickBtn type='scissors' />
      </Box>
      <Box className={classes.triangle}>
        <img src={triangle} alt='' />
      </Box>
    </Box>
  );
};
