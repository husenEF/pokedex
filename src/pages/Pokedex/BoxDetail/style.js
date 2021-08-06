import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => {
  return {
    gridContainer: {},
    tags: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
    },
    images: {
      display: "flex",
      justifyContent: "flex-end",
    },
  };
});

export default useStyles;
