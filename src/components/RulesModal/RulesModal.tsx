import React, { useState } from 'react';

import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import rules from '../../icons/image-rules.svg';

import { useStyles } from './styles';

export const RulesModal = () => {
  const classes = useStyles();
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
        variant='outlined'
        color='primary'
        className={classes.btn}
        onClick={handleClickOpen}>
        Rules
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <Box className={classes.top}>
          <DialogTitle disableTypography className={classes.title}>
            Rules
          </DialogTitle>
          <IconButton onClick={handleClose} color='primary'>
            <CloseIcon className={classes.closeBtn} />
          </IconButton>
        </Box>

        <DialogContent className={classes.content}>
          <img src={rules} alt='rules' />
        </DialogContent>
      </Dialog>
    </Box>
  );
};
