import React, { useState, useEffect } from "react";
import { useTransition, a } from "react-spring";
import useMeasure from "react-use-measure";
import useMedia from "../../hooks/useMedia";

import { List } from "./styles";

import data from "./data";

const MasonryCardContainer = () => {
  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    [4, 3, 2],
    1
  );
  const [measureRef, { width }] = useMeasure();
  const [heights, setHeights] = useState<any[]>([]);
  const [items, setItems] = useState(data);
  useEffect(() => {
    setHeights(new Array(columns).fill(0));
  }, [columns]);
  //const heights = new Array(columns).fill(0);
  const gridItems = items.map((child, i) => {
    const column = heights.indexOf(Math.min(...heights));
    const xy = [
      (width / columns) * column,
      (heights[column] += child.height / 2) - child.height / 2,
    ];
    return { ...child, xy, width: width / columns, height: child.height / 2 };
  });

  const transitions = useTransition(gridItems, {
    from: ({ xy, width, height }) => ({ xy, width, height }),
    enter: ({ xy, width, height }) => ({ xy, width, height }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  const fragment = transitions(({ xy, height, width }, item) => {
    return (
      <a.div
        key={item.id}
        style={{
          height: `${height}rem`,
          transform: xy.to((x, y) => `translate(${x}px,${y}rem)`),
          width,
        }}
      >
        <div style={{ backgroundImage: item.css }} />
      </a.div>
    );
  });

  return (
    <List ref={measureRef} style={{ height: `${Math.max(...heights)}rem` }}>
      {fragment}
    </List>
  );
};

export default MasonryCardContainer;
