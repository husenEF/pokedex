import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import analize from "rgbaster";
import clsx from "clsx";

import Api from "../../../service/api";
import { Spinner, Tags } from "../../../Components";

import useStyles from "./style";

const BoxDetail = ({ name }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [color, setColor] = useState("#fff");

  const fetchDetail = async () => {
    Api.get(`pokemon/${name}`)
      .then((res) => {
        // console.log("detail", name, res.data);
        setData(res.data);
        getColors(res.data.sprites.other["official-artwork"].front_default);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchDetail();
  }, []);

  const renderTag = (tags) => {
    return tags.map((e, i) => <Tags title={e.type.name} key={i} />);
  };
  const getColors = async (img) => {
    const result = await analize(img);
    setColor(result[0].color);
  };

  if (loading) return <Spinner />;
  return (
    <Card
      variant="outlined"
      className={clsx(classes.gridContainer)}
      style={{ backgroundColor: color }}>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              component={Link}
              className={classes.link}
              to={`/pokemon/${name}`}>
              {name}
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.tags}>
            {renderTag(data.types)}
          </Grid>
          <Grid item xs={6} className={classes.images}>
            <img
              src={data.sprites.other["official-artwork"].front_default}
              style={{ maxHeight: 100 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

BoxDetail.defaultProps = {
  name: null,
};
export default BoxDetail;
