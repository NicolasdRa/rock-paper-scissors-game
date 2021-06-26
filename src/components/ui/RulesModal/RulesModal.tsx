import { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  useTheme,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import rules from "../../../icons/image-rules.svg";

import { useStyles } from "./styles";

export const RulesModal: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.main}>
      <Button
        variant="outlined"
        color="primary"
        className={classes.btn}
        onClick={handleClickOpen}
      >
        Rules
      </Button>
      <Dialog
        fullScreen={matches}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.modal}
      >
        <Box className={classes.top}>
          <DialogTitle disableTypography className={classes.title}>
            Rules
          </DialogTitle>
          {!matches && (
            <IconButton onClick={handleClose} color="primary">
              <CloseIcon className={classes.closeBtn} />
            </IconButton>
          )}
        </Box>

        <DialogContent className={classes.content}>
          <img src={rules} alt="rules" />
        </DialogContent>

        {matches && (
          <IconButton onClick={handleClose} color="primary">
            <CloseIcon className={classes.closeBtnPhone} />
          </IconButton>
        )}
      </Dialog>
    </Box>
  );
};
