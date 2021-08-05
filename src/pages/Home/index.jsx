import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Typography,
  makeStyles,
  InputAdornment,
} from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

import { Search } from "../../Components";
import Box from "./Box";

// import { inc, dec } from "../../store/count/actions";
import { getData } from "../../store/pokemon/actions";

const useStyles = makeStyles((theme) => ({
  item: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    // textAlign: 'center'
  },
}));

const Home = () => {
  // const {
  //   count: { count },
  //   pokemon,
  // } = useSelector((state) => state);
  const dispatch = useDispatch();
  const classes = useStyles();

  const fetchPokemon = () => dispatch(getData());

  useEffect(() => {
    fetchPokemon();
  }, []);
  const link = [
    {
      title: "Pokedex",
      color: "green",
      pathc:'/pokedex'
    },
    {
      title: "Moves",
      color: "red",
    },
    {
      title: "Abilities",
      color: "blue",
    },
    {
      title: "Items",
      color: "yellow",
    },
    {
      title: "Locations",
      color: "purple",
    },
    {
      title: "Type Effects",
      color: "brown",
    },
  ];
  // console.log({ pokemon });
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}>
      <Grid item xs className={classes.item}>
        <Typography variant="h3" align="left">
          What Pokemnon
          <br />
          are you looking for?
        </Typography>
        <Search
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search Pokemon, Move,Ability, etc"
        />
      </Grid>
      <Grid item md={12}>
        <Grid
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          container>
          {link.map((e, i) => {
            return (
              <Grid item md={6} key={i}>
                <Box title={e.title} color={e.color} />
              </Grid>
            );
          })}
          {/* <Grid item md={6}>
            <Card>
              <CardContent>
                <Typography>Pokedex</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card>
              <CardContent>
                <Typography>MOves</Typography>
              </CardContent>
            </Card>
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
