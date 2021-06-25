import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    startBtn: {
      // position: "absolute",
      // bottom: "2rem",
      // right: "10rem",
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
