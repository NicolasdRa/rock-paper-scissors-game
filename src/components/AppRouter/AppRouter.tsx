import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { Header } from '../Header/Header';
import { Board } from '../Board/Board';
import { Game } from '../Game/Game';
import { RulesModal } from '../RulesModal/RulesModal';

import { useStyles } from './styles';

export const AppRouter = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Header score={12} />
      <Router>
        <Switch>
          <Route exact path='/' component={Board} />
          <Route exact path='/game' component={Game} />
        </Switch>
      </Router>
      <RulesModal />
    </Box>
  );
};