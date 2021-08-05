import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";

import Api from "../../../service/api";
import { Spinner, Tags } from "../../../Components";

const BoxDetail = ({ name }) => {
  //   const rende
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchDetail = async () => {
    Api.get(`pokemon/${name}`)
      .then((res) => {
        // console.log("detail", name, res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchDetail();
  }, []);

  const renderTag = (tags) => {
    return tags.map((e) => <Tags title={e.type.name} />);
  };

  if (loading) return <Spinner />;
  console.log(`here ${name}`, { data });
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>{name}</Typography>
      </Grid>
      <Grid item xs={6}>
        {renderTag(data.types)}
      </Grid>
      <Grid item xs={6}>
        <img
          src={data.sprites.other["official-artwork"].front_default}
          style={{ maxHeight: 100 }}
        />
      </Grid>
    </Grid>
  );
};

BoxDetail.defaultProps = {
  name: null,
};
export default BoxDetail;
