import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      borderRadius: "50%",
      transition: "transform .2s, box-shadow .2s",
      "&:hover": {
        boxShadow: `0px 10px 10px 1px ${theme.palette.common.headerOutline}`,
        transform: "scale(1.05) perspective(0px)",
      },
    },
    btn: {
      padding: "1.1rem",
      background: `radial-gradient(${theme.palette.common.white}, ${theme.palette.common.score})`,

      [theme.breakpoints.down("md")]: {
        padding: ".8rem",
      },
    },

    btnBig: {
      padding: "1.7rem",

      [theme.breakpoints.down("md")]: {
        padding: ".8rem",
      },
    },

    icon: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "3rem",
      height: "3rem",

      [theme.breakpoints.down("md")]: {
        width: "2.6rem",
        height: "2.6rem",
      },
    },

    iconBig: {
      width: "4.5rem",
      height: "4.5rem",

      [theme.breakpoints.down("md")]: {
        width: "2.6rem",
        height: "2.6rem",
      },
    },

    iconContainer: {
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      height: "7rem",
      width: "7rem",
      borderRadius: "50%",
      backgroundColor: theme.palette.common.white,
      boxShadow: `inset 0px 7px 2px ${theme.palette.common.shadow}`,

      [theme.breakpoints.down("md")]: {
        boxShadow: `inset 0px 6px 2px ${theme.palette.common.shadow}`,
        height: "6rem",
        width: "6rem",
      },
    },

    iconContainerBig: {
      height: "10rem",
      width: "10rem",
      "&::before": {
        content: '""',
        height: "10rem",
        width: "10rem",

        [theme.breakpoints.down("md")]: {
          height: "5.8rem",
          width: "6rem",
        },
      },

      [theme.breakpoints.down("md")]: {
        height: "6rem",
        width: "6rem",
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

        [theme.breakpoints.down("md")]: {
          height: "7.5rem",
          width: "7rem",
        },
      },

      [theme.breakpoints.down("md")]: {
        height: "7.3rem",
        width: "7.3rem",
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

        [theme.breakpoints.down("md")]: {
          height: "7.5rem",
          width: "7rem",
        },
      },

      [theme.breakpoints.down("md")]: {
        height: "7.3rem",
        width: "7.3rem",
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

        [theme.breakpoints.down("md")]: {
          height: "7.5rem",
          width: "7rem",
        },
      },

      [theme.breakpoints.down("md")]: {
        height: "7.3rem",
        width: "7.3rem",
      },
    },

    btnRockBig: {
      "&::before": {
        height: "13rem",
        width: "13rem",

        [theme.breakpoints.down("md")]: {
          height: "7.5rem",
          width: "7rem",
        },
      },
    },

    btnPaperBig: {
      "&::before": {
        height: "13rem",
        width: "13rem",

        [theme.breakpoints.down("md")]: {
          height: "7.5rem",
          width: "7rem",
        },
      },
    },

    btnScissorsBig: {
      "&::before": {
        height: "13rem",
        width: "13rem",

        [theme.breakpoints.down("md")]: {
          height: "7.5rem",
          width: "7rem",
        },
      },
    },
  })
);
