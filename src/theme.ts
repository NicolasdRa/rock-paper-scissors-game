import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: 'hsl(229, 25%, 31%)',
    },
    secondary: {
      main: 'hsl(229, 64%, 46%)',
    },
    common: {
      // backgroundLight: '#1f3756',
      // backgroundDark: hsl(214, 47%, 23%) to hsl(237, 49%, 15%)',
      white: '#ffffff',
      score: '#dde0e1',
      darkText: 'hsl(229, 25%, 31%)',
      scoreText: 'hsl(229, 64%, 46%)',
      headerOutline: 'hsl(217, 16%, 45%)',
      scissorsGradient: 'hsl(39, 89%, 49%) to hsl(40, 84%, 53%)',
      paperGradient: 'hsl(230, 89%, 62%) to hsl(230, 89%, 65%)',
      rockGradient: 'hsl(349, 71%, 52%) to hsl(349, 70%, 56%)',
      lizardGradient: 'hsl(261, 73%, 60%) to hsl(261, 72%, 63%)',
      cyanGradient: 'hsl(189, 59%, 53%) to hsl(189, 58%, 57%)',
    },
    background: {
      default: 'white',
    },
  },

  typography: {
    fontFamily: ['Barlow Semi Condensed', 'sans-serif'].join(','),
  },

  overrides: {
    MuiTooltip: {
      tooltip: {
        backgroundColor: '#ffffff',
        color: 'hsl(229, 25%, 31%)',
        fontSize: '10px',
      },
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 960,
      lg: 1366,
      xl: 1920,
    },
  },
});
