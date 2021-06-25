import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      padding: "2rem",
    },

    modal: {
      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      },
    },

    top: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: ".5rem",

      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
        marginTop: "4rem",
      },
    },

    title: {
      fontSize: "1.8rem",

      fontWeight: 700,
      color: theme.palette.common.darkText,
      textTransform: "uppercase",

      [theme.breakpoints.down("md")]: {
        fontSize: "2.5rem",
      },
    },

    closeBtn: {
      fontSize: "1.9rem",
      marginRight: "1rem",
      color: theme.palette.common.darkText,
      opacity: 0.5,
    },

    closeBtnPhone: {
      fontSize: "1.9rem",
      color: theme.palette.common.darkText,
      opacity: 0.5,
      marginBottom: "4rem",
    },

    content: {
      padding: "1rem 2rem 2rem 2rem",

      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      },
    },

    btn: {
      padding: ".3rem 2rem",
      color: theme.palette.common.score,
      borderColor: theme.palette.common.score,
      borderRadius: ".5rem",
      "&:hover": {
        color: theme.palette.common.white,
        borderColor: theme.palette.common.white,
      },
    },
  })
);
