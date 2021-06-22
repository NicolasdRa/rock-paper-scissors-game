import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { DataContext } from '../../context/DataContext';
import { Box, IconButton, Tooltip } from '@material-ui/core';
import rockImg from '../../icons/icon-rock.svg';
import paperImg from '../../icons/icon-paper.svg';
import scissorsImg from '../../icons/icon-scissors.svg';

import { useStyles } from './styles';

interface Props {
  type: string;
  size?: string;
}

export const PickBtn: React.FC<Props> = ({ type, size }) => {
  const classes = useStyles();

  const { pick, setPick } = useContext(DataContext);

  const getImg = (type: string): any => {
    if (type === 'rock') {
      return rockImg;
    } else if (type === 'paper') {
      return paperImg;
    } else if (type === 'scissors') return scissorsImg;
  };

  return (
    <Box>
      <Tooltip title={type}>
        <IconButton
          onClick={() => setPick(type)}
          component={Link}
          to='/game'
          //   size='medium'
          className={clsx(classes.btn, {
            [classes.btnRock]: type === 'rock',
            [classes.btnPaper]: type === 'paper',
            [classes.btnScissors]: type === 'scissors',
            [classes.btnBig]: size === 'big',
          })}>
          <Box
            className={clsx(classes.iconContainer, {
              [classes.iconContainerBig]: size === 'big',
            })}>
            <img src={getImg(type)} alt='pick btn' className={classes.icon} />
          </Box>
        </IconButton>
      </Tooltip>
    </Box>
  );
};
