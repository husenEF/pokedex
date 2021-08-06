import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => {
  return {
    gridContainer: {
      // backgroundColor: "red",
    },
    tags: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
    },
    images: {
      display: "flex",
      justifyContent: "flex-end",
    },
    link: {
      color: theme.palette.common.white,
    },
  };
});

export default useStyles;
