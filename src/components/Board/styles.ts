import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      marginTop: '2rem',
      position: 'relative',
      height: '70vh',
      width: '30vw',
    },

    triangle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 0,
    },

    btnRock: {
      position: 'absolute',
      bottom: '0%',
      left: '50%',
      transform: 'translate(-50%, -20%)',
      zIndex: 1,
    },

    btnPaper: {
      position: 'absolute',
      top: '0%',
      left: '0%',
      zIndex: 1,
    },

    btnScissors: {
      position: 'absolute',
      top: '0%',
      right: '0%',
      zIndex: 1,
    },
  }),
);
