import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.palette.common.background,
      width: "50vw",
      minHeight: "max-content",
      border: "2px",
      borderStyle: "solid",
      borderRadius: ".5rem",
      borderColor: theme.palette.common.headerOutline,
      padding: "1rem 1.5rem",
      margin: "1rem auto 2rem auto",

      [theme.breakpoints.down("md")]: {
        width: "90vw",
      },
    },

    titleBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: theme.palette.common.background,
      minHeight: "max-content",
    },

    title: {
      textTransform: "uppercase",
      fontSize: "2rem",
      margin: "-4px",
      padding: 0,
      color: theme.palette.common.score,
      fontWeight: 600,

      [theme.breakpoints.down("md")]: {
        fontSize: "1.5rem",
      },
    },

    scoreBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.common.score,
      minHeight: "max-content",
      textTransform: "uppercase",
      padding: "1rem 2.5em",
      borderRadius: "6px",

      [theme.breakpoints.down("md")]: {
        padding: ".5rem 1.5rem",
        borderRadius: "6px",
      },
    },
    scoreTitle: {
      fontSize: "1rem",
      color: theme.palette.common.scoreText,

      [theme.breakpoints.down("md")]: {
        fontSize: ".8rem",
      },
    },
    score: {
      fontSize: "3.5rem",
      fontWeight: 700,
      color: theme.palette.common.darkText,

      [theme.breakpoints.down("md")]: {
        fontSize: "2.5rem",
      },
    },
  })
);
