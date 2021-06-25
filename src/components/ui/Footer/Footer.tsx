import { Box } from "@material-ui/core";

import { RulesModal } from "../RulesModal/RulesModal";
import { StartBtn } from "../StartBtn/StartBtn";
import { useStyles } from "./styles";

export const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Box>
        <StartBtn />
      </Box>
      <Box>
        <RulesModal />
      </Box>
    </Box>
  );
};
