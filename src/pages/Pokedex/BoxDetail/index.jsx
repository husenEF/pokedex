import React, { useEffect, useState } from "react";

import Api from "../../../service/api";
import { Spinner } from "../../../Components";
import { Typography } from "@material-ui/core";

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

  if (loading) return <Spinner />;
  console.log(`here ${name}`, { data });
  return (
    <>
      <Typography>{name}</Typography>
    </>
  );
};

BoxDetail.defaultProps = {
  name: null,
};
export default BoxDetail;
