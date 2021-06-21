import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      padding: '2rem',
    },

    top: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem',
    },

    title: {
      fontSize: '1.8rem',
      fontWeight: 700,
      color: theme.palette.common.darkText,
      textTransform: 'uppercase',
    },

    closeBtn: {
      fontSize: '1.8rem',
      ccolor: theme.palette.common.darkText,
      opacity: 0.5,
    },

    content: { padding: '1rem 2rem 2rem 2rem' },

    btn: {
      position: 'absolute',
      bottom: '2rem',
      right: '2rem',
      padding: '.3rem 2rem',
      color: theme.palette.common.score,
      borderColor: theme.palette.common.score,
      borderRadius: '.5rem',
      '&:hover': {
        color: theme.palette.common.white,
        borderColor: theme.palette.common.white,
      },
    },
  }),
);
