import { useContext, useEffect } from 'react';
import { DataContext } from '../../context/DataContext';
import { Box, Typography } from '@material-ui/core';

import { PickBtn } from '../PickBtn/PickBtn';

import { useStyles } from './styles';

export const Game = () => {
  const classes = useStyles();

  const { pick } = useContext(DataContext);

  useEffect(() => {
    console.log(pick);
  }, [pick]);

  const choices = ['rock', 'paper', 'scissors'];

  const housePick = (choices: string[]) => {
    return choices[Math.floor(Math.random() * 3)];
  };

  // TODO: RESULT
  // const result = comparison evaluation

  // TODO: SET SCORE GLOBALLY after result calculation

  return (
    <Box className={classes.main}>
      <Box className={classes.pickTitles}>
        <Typography className={classes.pickTitle}>You Picked</Typography>
        <PickBtn type={pick} />
      </Box>
      <Box className={classes.pickTitles}>
        <Typography className={classes.pickTitle}>The House Picked</Typography>
        <PickBtn type={housePick(choices)} />
      </Box>
    </Box>
  );
};
