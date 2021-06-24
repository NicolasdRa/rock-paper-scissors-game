import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: "flex",
      width: "fit-content",
      justifyContent: "space-around",
    },

    you: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "45vh",
    },

    resultContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "45vh",
    },

    result: {
      fontSize: "3rem",
      color: theme.palette.common.white,
      textTransform: "uppercase",
      margin: ".5rem 1rem",
    },

    btn: {
      backgroundColor: theme.palette.common.white,

      color: "red",
    },

    house: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "45vh",
    },

    pickTitle: {
      margin: ".5rem 1rem 3rem 1rem",
      color: theme.palette.common.score,
      textTransform: "uppercase",
      fontSize: "1.2rem",
    },
  })
);
