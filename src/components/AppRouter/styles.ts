import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      background: 'radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
      height: '100vh',
      padding: '2rem',
    },
  }),
);
