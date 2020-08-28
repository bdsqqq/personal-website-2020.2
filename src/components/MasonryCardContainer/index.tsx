import React, { useState, useEffect } from "react";
import { useTransition, a } from "react-spring";
import useMedia from "../../hooks/useMedia";
import useMeasure from "../../hooks/useMeasure";

import { List } from "./styles";

import data from "./data";

interface MasonryCardContainerProps {
  width: number;
}

const MasonryCardContainer = () => {
  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    [4, 3, 2],
    1
  );

  const { width } = useMeasure();
  //const width = useContext(MeasureContext);
  // const [measureRef, { width }] = useMeasure({
  //   scroll: false,
  //   polyfill: resizeObserverPolyfill,
  // });

  //const [heights, setHeights] = useState<any[]>([]);
  const [items] = useState(data);
  //const [heights, setHeights] = useState<any>(new Array(columns).fill(0));
  const heights = new Array(columns).fill(0);
  useEffect(() => {
    console.log(width, heights, columns);
  });

  let gridItems = items.map((child, i) => {
    const column = heights.indexOf(Math.min(...heights));
    const xy = [
      (width / columns) * column,
      (heights[column] += child.height / 2) - child.height / 2,
    ];

    return {
      ...child,
      xy,
      width: width / columns,
      height: child.height / 2,
    };
  });

  // useEffect(() => {
  //   setHeights(heights.map(() => 0));
  // }, [columns, width]);

  const transitions = useTransition(gridItems, {
    from: ({ xy, width, height }) => ({ xy, width, height }),
    enter: ({ xy, width, height }) => ({ xy, width, height }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  const fragment = transitions(({ xy, width }, item) => {
    return (
      <a.div
        key={item.id}
        style={{
          transform: xy.to((x: any, y: any) => `translate(${x}px,${y}rem)`),
          width,
          height: `${item.height}rem`,
        }}
      >
        <div style={{ backgroundImage: item.css }} />
      </a.div>
    );
  });

  return (
    <>
      <List style={{ height: `${Math.max(...heights)}rem` }}>{fragment}</List>
    </>
  );
};

export default MasonryCardContainer;
