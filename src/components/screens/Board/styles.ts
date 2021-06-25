import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    boardMain: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    boardContent: {
      marginTop: "2rem",
      position: "relative",
      display: "flex",
      justifyContent: "center",

      [theme.breakpoints.down("md")]: {
        marginTop: "0",
        height: "50vh",
        width: "100vw",
      },
    },

    triangle: {
      position: "absolute",
      height: "16rem",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 0,

      [theme.breakpoints.down("md")]: {
        height: "10rem",
      },
    },

    btnsContainer: {
      display: "flex",
      height: "52vh",

      [theme.breakpoints.down("md")]: {
        marginTop: "2rem",
        height: "42vh",
      },
    },

    btnRock: {
      zIndex: 1,
      alignSelf: "flex-end",
      [theme.breakpoints.down("md")]: {
        margin: "2rem -2rem",
      },
    },

    btnPaper: {
      zIndex: 1,

      [theme.breakpoints.down("md")]: {
        marginTop: "2rem",
      },
    },

    btnScissors: {
      zIndex: 1,

      [theme.breakpoints.down("md")]: {
        marginTop: "2rem",
      },
    },
  })
);
