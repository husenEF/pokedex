import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home, About, Pokemon, Pokedex, PokemonDetail } from "../pages";

const Content = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/pokemon/:id">
        <PokemonDetail />
      </Route>
      <Route path="/pokemon">
        <Pokemon />
      </Route>
      <Route path="/pokedex">
        <Pokedex />
      </Route>
    </Switch>
  );
};

export default Content;
