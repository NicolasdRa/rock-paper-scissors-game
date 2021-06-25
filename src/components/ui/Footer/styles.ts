import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      position: "absolute",
      bottom: 0,
      right: "2rem",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",

      [theme.breakpoints.down("md")]: {
        justifyContent: "space-between",
        right: "1.5rem",
      },
    },
  })
);
