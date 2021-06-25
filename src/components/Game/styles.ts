import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
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
    },

    youBtn: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "35vh",
      zIndex: 2,
    },

    houseBtn: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "35vh",
      zIndex: 2,
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
      },
    },

    resultContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "35vh",
      width: "14rem",
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
    },

    btn: {
      backgroundColor: theme.palette.common.white,
      textAlign: "center",
      color: "red",
    },

    pickTitle: {
      width: "10rem",
      margin: ".5rem 1rem 3rem 1rem",
      color: theme.palette.common.score,
      textTransform: "uppercase",
      fontSize: "1.2rem",
    },

    show: { display: "flex" },
    hide: { display: "none" },

    win: { color: "white" },
    lose: { color: "red" },
    draw: { color: "grey" },
  })
);
