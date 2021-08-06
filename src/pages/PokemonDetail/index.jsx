import React from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const params = useParams();
  console.log({ params });
  return <h3>POkemon Detail</h3>;
};

export default PokemonDetail;
