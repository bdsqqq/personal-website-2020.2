import React, { useState } from "react";
import { Grid } from "mauerwerk";
import data from "./data";

import Card from "../Card";

const MasonryCardContainer = () => {
  const [columns, setColumns] = useState(3);

  return (
    <>
      <button
        onClick={() => {
          setColumns(columns + 1);
        }}
      >
        +1
      </button>
      {"     "}
      <button
        onClick={() => {
          setColumns(columns - 1);
        }}
      >
        -1
      </button>
      <Grid
        data={data}
        keys={(data) => data.id}
        heights={(data) => data.height}
        columns={columns}
        style={{ flex: 1 }}
        margin={16}
      >
        {(data) => (
          <div
            style={{
              width: "100%",
              height: "100%",
              willChange: "transform, width, height, opacity",
            }}
          >
            <Card
              project={{
                id: data.id,
                ano: "",
                demo: "",
                img: data.css,
                projeto: "",
                role: "",
                source: "",
                tools: [""],
                order: "1",
                height: data.height,
              }}
            />
          </div>
        )}
      </Grid>
    </>
  );
};

export default MasonryCardContainer;
