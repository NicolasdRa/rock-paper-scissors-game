import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      borderRadius: "50%",
      transition: "transform .2s, box-shadow .2s",
      "&:hover": {
        boxShadow: `0px 10px 10px 1px ${theme.palette.common.headerOutline}`,
        transform: "scale(1.04) perspective(0px)",
      },
    },
    btn: {
      padding: "1rem",
      background: `radial-gradient(${theme.palette.common.white}, ${theme.palette.common.score})`,
    },

    btnBig: {
      padding: "1.7rem !important",
    },

    icon: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "3rem",
      height: "3rem",
    },

    iconBig: {
      width: "4.5rem",
      height: "4.5rem",
    },

    iconContainer: {
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      height: "7rem",
      width: "7rem",
      borderRadius: "50%",
      background: `radial-gradient(1rem at center, ${theme.palette.common.score}, ${theme.palette.common.score})`,
      "&::before": {
        content: '""',
        height: "6.6rem",
        width: "7rem",
        backgroundColor: theme.palette.common.white,
        position: "absolute",
        display: "block",
        borderRadius: "50%",
        top: "5%",
      },
    },

    iconContainerBig: {
      height: "10rem",
      width: "10rem",
      "&::before": {
        content: '""',
        height: "10rem",
        width: "10rem",
      },
    },

    btnRock: {
      background: "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
      "&::before": {
        content: '""',
        height: "9.5rem",
        width: "9rem",
        backgroundColor: "#a6243c",
        position: "absolute",
        display: "block",
        borderRadius: "50%",
        bottom: "-5%",
        zIndex: -1,
      },
    },

    btnRockBig: {
      "&::before": {
        height: "13rem",
        width: "13rem",
      },
    },

    btnPaper: {
      background: "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
      "&::before": {
        content: '""',
        height: "9.5rem",
        width: "9rem",
        backgroundColor: "#2037a8",
        position: "absolute",
        display: "block",
        borderRadius: "50%",
        bottom: "-5%",
        zIndex: -1,
      },
    },

    btnPaperBig: {
      "&::before": {
        height: "13rem",
        width: "13rem",
      },
    },

    btnScissors: {
      background: "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
      "&::before": {
        content: '""',
        height: "9.5rem",
        width: "9rem",
        backgroundColor: "#d18d0f",
        position: "absolute",
        display: "block",
        borderRadius: "50%",
        bottom: "-5%",
        zIndex: -1,
      },
    },

    btnScissorsBig: {
      "&::before": {
        height: "13rem",
        width: "13rem",
      },
    },
  })
);
