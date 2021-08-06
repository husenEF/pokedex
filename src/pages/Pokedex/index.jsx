import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";

import { getData } from "../../store/pokemon/actions";
import { Spinner } from "../../Components";
import BoxDetail from "./BoxDetail";

const useStyles = makeStyles((theme) => {
  return {
    box: {
      borderRadius: theme.spacing(1),
    },
  };
});

const Pokedex = () => {
  const classes = useStyles();
  const { data } = useSelector((state) => state.pokemon);
  const [loading, setLoadng] = useState(true);
  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(getData());
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (Object.keys(data).length > 0) setLoadng(false);
  }, [data]);

  const renderList = () => {
    if (loading) return <Spinner />;
    else {
      return Object.keys(data).map((e) => {
        // console.log({ data });
        return (
          <Grid item sm={6} key={e}>
            {/* <Box title={data[e].name} className={classes.box}> */}
              <BoxDetail name={data[e].name} />
            {/* </Box> */}
          </Grid>
        );
      });
    }
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}>
      {renderList()}
    </Grid>
  );
};

export default Pokedex;
