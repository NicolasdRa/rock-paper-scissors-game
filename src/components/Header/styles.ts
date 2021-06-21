import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.palette.common.background,
      minHeight: 'max-content',
      width: '50%',
      // maxWidth: '30vw',
      border: '2px',
      borderStyle: 'solid',
      borderRadius: '1rem',
      borderColor: theme.palette.common.headerOutline,
      padding: '1rem 1.5rem',
      margin: '2rem auto',
    },

    titleBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: theme.palette.common.background,
      minHeight: 'max-content',
      textTransform: 'uppercase',
      fontSize: '2rem',
    },

    title: {
      textTransform: 'uppercase',
      fontSize: '2rem',
      margin: '-4px',
      padding: 0,
      color: theme.palette.common.score,
      fontWeight: 600,
    },

    scoreBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.common.score,
      minHeight: 'max-content',
      textTransform: 'uppercase',
      padding: '1rem 2.5em',
      borderRadius: '6px',
    },
    scoreTitle: { fontSize: '1rem', color: theme.palette.common.scoreText },
    score: {
      fontSize: '3.5rem',
      fontWeight: 700,
      color: theme.palette.common.darkText,
    },
  }),
);
