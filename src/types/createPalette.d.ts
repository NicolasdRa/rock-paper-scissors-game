import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface CommonColors {
    background?: string;
    score: string;
    darkText?: string;
    scoreText?: string;
    headerOutline?: string;
    scissorsGradient?: string;
    paperGradient?: string;
    rockGradient?: string;
    lizardGradient?: string;
    cyanGradient?: string;
  }
}
