import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gameMain: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    gameContent: {
      display: "flex",
      flexDirection: "column",
      width: "fit-content",
      justifyContent: "space-around",
      alignItems: "center",
    },

    titles: {
      display: "flex",
      flexDirection: "row",
      width: "70vw",
      justifyContent: "space-around",
    },

    content: {
      display: "flex",
      flexDirection: "row",
      width: "55vw",
      justifyContent: "space-around",

      [theme.breakpoints.down("md")]: {
        width: "90vw",
      },
    },

    youBtn: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "35vh",
      zIndex: 2,

      [theme.breakpoints.down("md")]: {
        height: "25vh",
      },
    },

    houseBtn: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "35vh",
      zIndex: 2,

      [theme.breakpoints.down("md")]: {
        height: "25vh",
      },
    },

    hole: {
      position: "relative",
      height: "13.5rem",
      width: "13.5rem",
      borderRadius: "50%",
      background: `radial-gradient(10rem at center, #1a2538 45%, ${theme.palette.primary.main} 93%)`,
      boxShadow: `inset 0px 0px 20px 5px  #0004`,
      "&::after": {
        content: '""',
        height: "13rem",
        width: "13rem",
        backgroundColor: "#1a2538",
        position: "absolute",
        display: "block",
        borderRadius: "50%",
        bottom: "-5%",
        zIndex: -1,

        [theme.breakpoints.down("md")]: {
          height: "8rem",
          width: "8rem",
        },
      },

      [theme.breakpoints.down("md")]: {
        height: "8rem",
        width: "8rem",
      },
    },

    resultContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "35vh",
      // width: "14rem",

      [theme.breakpoints.down("md")]: {
        height: "15vh",
      },
    },

    resultContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },

    result: {
      fontSize: "3rem",
      color: theme.palette.common.white,
      textTransform: "uppercase",
      margin: ".5rem 1rem",

      [theme.breakpoints.down("md")]: {
        fontSize: "3.5rem",
      },
    },

    btn: {
      backgroundColor: theme.palette.common.white,
      textAlign: "center",
      color: theme.palette.common.darkText,
      padding: ".7rem",
      borderRadius: ".5rem",
      minWidth: "80%",
    },

    pickTitle: {
      width: "10rem",
      margin: ".5rem .5rem 3rem .5rem",
      color: theme.palette.common.score,
      textTransform: "uppercase",
      fontSize: "1.2rem",
    },

    show: { display: "flex" },
    hide: { display: "none" },

    win: { color: "white" },
    lose: { color: theme.palette.secondary.main },
    draw: { color: "grey" },
  })
);
