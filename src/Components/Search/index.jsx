// import React from "react"
import { TextField, makeStyles } from "@material-ui/core";
// const SearchBox = styled(TextField)(() => ({
//   root: {
//     backgroundColor: "red",
//   },
//   "& fieldset": {
//     borderRadius: "25px",
//   },
// }));
const useStyles = makeStyles((theme) => {
  //   console.log({ theme });
  return {
    root: {
      marginTop: theme.spacing(2),
      // backgroundColor: "red",
      "& fieldset": {
        borderRadius: "25px",
        backgroundColor: "#f5f5f56b",
      },
      "& input": {
        paddingTop: theme.spacing(1.4),
        paddingBottom: theme.spacing(1.4),
      },
    },
  };
});

const SearchBox = (props) => {
  const classes = useStyles();
  return <TextField {...props} className={classes.root} />;
};
SearchBox.defaultProps = {
  variant: "outlined",
};

export default SearchBox;
