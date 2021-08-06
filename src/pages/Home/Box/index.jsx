import React from "react";
import cslx from "clsx";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  makeStyles,
  Typography,
  colors,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  console.log({ theme });
  return {
    root: {
      justifyContent: "center,",
      color: "white",
    },
    cardContent: {
      padding: theme.spacing(1),
      "&:last-child": {
        padding: theme.spacing(1),
      },
    },
    green: {
      // backgroundColor: theme.palette
      backgroundColor: colors.green.A200,
    },
    red: {
      backgroundColor: colors.pink["200"],
    },
    blue: {
      backgroundColor: colors.blue["200"],
    },
    purple: {
      backgroundColor: colors.deepPurple[200],
    },
    yellow: {
      backgroundColor: colors.yellow.A200,
    },
    brown: {
      backgroundColor: colors.brown[200],
    },
  };
});

const Box = (props) => {
  const { title, color, link, className, children } = props;
  const classes = useStyles();
  const to = link || title.toLowerCase();
  console.log({ children });
  return (
    // <Card className={classes[color]}>
    <Card className={cslx(classes.root, classes[color], className)}>
      <CardContent className={classes.cardContent}>
        {children ? (
          children
        ) : (
          <Link to={`/${to}`}>
            <Typography>{title}</Typography>
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

Box.defaultProps = {
  title: "",
  color: "blue",
  link: null,
};

export default Box;
