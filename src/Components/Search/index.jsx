import { TextField, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginTop: theme.spacing(2),
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
