import { Box } from "@material-ui/core";

import { Header } from "../../ui/Header/Header";
import { PickBtn } from "../../ui/PickBtn/PickBtn";
import triangle from "../../../icons/bg-triangle.svg";
import { Footer } from "../../ui/Footer/Footer";
import { useStyles } from "./styles";

export const Board = () => {
  const classes = useStyles();

  return (
    <Box className={classes.boardMain}>
      <Header />
      <Box className={classes.boardContent}>
        <Box className={classes.btnsContainer}>
          <Box className={classes.btnPaper}>
            <PickBtn type="paper" />
          </Box>
          <Box className={classes.btnRock}>
            <PickBtn type="rock" />
          </Box>

          <Box className={classes.btnScissors}>
            <PickBtn type="scissors" />
          </Box>
        </Box>
        <img src={triangle} alt="" className={classes.triangle} />
      </Box>
      <Footer />
    </Box>
  );
};
