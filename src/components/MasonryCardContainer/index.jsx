import React from "react";
import { Grid } from "mauerwerk";
import data from "./data";

import { Cell } from "./styles";

const MasonryCardContainer = () => {
  return (
    <Grid
      data={data}
      keys={(data) => data.id}
      heights={(data) => data.height}
      columns={3}
      style={{ flex: 1 }}
      margin={16}
    >
      {(data) => <Cell style={{ backgroundImage: data.css }} />}
    </Grid>
  );
};

export default MasonryCardContainer;
