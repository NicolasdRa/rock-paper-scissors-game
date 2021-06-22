import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: 'flex',
      width: '30vw',
    },

    pickTitles: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '20vw',
    },

    pickTitle: {
      margin: '.5rem 1rem',
      color: theme.palette.common.score,
      textTransform: 'uppercase',
    },
  }),
);
