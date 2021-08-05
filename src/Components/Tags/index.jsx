import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(0.5),
    backgroundColor: "#00000036",
    marginBottom: theme.spacing(0.5),
  },
}));

const Tags = (props) => {
  const classes = useStyles();
  const { title } = props;
  return (
    <Button
      size="small"
      variant="contained"
      color="primary"
      {...props}
      className={classes.root}>
      {title}
    </Button>
  );
};

export default Tags;
