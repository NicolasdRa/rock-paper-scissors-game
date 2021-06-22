import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      padding: '1rem',
      background: `radial-gradient(${theme.palette.common.white}, ${theme.palette.common.score})`,
      transition: 'transform .2s, box-shadow .2s',
      '&:hover': {
        transform: 'scale(1.04) perspective(0px)',
        boxShadow: '0px 0px 20px 2px rgba(221,224,225,0.7)',
      },
    },

    icon: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '3rem',
      height: '3rem',
    },

    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '7rem',
      width: '7rem',
      borderRadius: '50%',
      background: `radial-gradient(1rem at center, ${theme.palette.common.white}, ${theme.palette.common.score})`,
    },

    btnRock: {
      background: 'linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
      boxShadow: 'inset -1px 3px 8px 5px #e05770, 2px 5px 16px 0px #0B325E',
    },

    btnPaper: {
      background: 'linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
      boxShadow: 'inset -1px 3px 8px 5px #1F87FF, 2px 5px 16px 0px #0B325E',
    },

    btnScissors: {
      background: 'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
      boxShadow: 'inset -1px 3px 8px 5px #e6bd6c, 2px 5px 16px 0px #0B325E',
    },

    btnBig: {
      padding: '1.5rem !important',
    },

    iconContainerBig: {
      height: '8rem !important',
      width: '8rem !important',
    },
  }),
);
