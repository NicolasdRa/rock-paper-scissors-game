import { DataProvider } from "../context/DataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";

import { Board } from "../components/screens/Board/Board";
import { Game } from "../components/screens/Game/Game";

import { useStyles } from "./styles";

export const AppRouter = () => {
  const classes = useStyles();

  return (
    <DataProvider>
      <Box className={classes.main}>
        <Router>
          <Switch>
            <Route exact path="/" component={Board} />
            <Route exact path="/game" component={Game} />
          </Switch>
        </Router>
      </Box>
    </DataProvider>
  );
};
