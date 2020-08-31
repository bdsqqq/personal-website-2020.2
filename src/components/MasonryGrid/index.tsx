import React, { useState } from "react";
import data from "./data";
import { useTransition, animated } from "react-spring";
import useMedia from "../../hooks/useMedia";
import usepureReverseArray from "../../hooks/usePureReverseArray";
import useMeasure from "react-use-measure";

import Card from "../Card";

import { List } from "./styles";
import { breakpoints } from "../../styles/global";

const MasonryGrid = React.memo(() => {
  // The array is being reverted instead of the number of columns because when i do it the other way it gets stuck on the number of columnsin [0]
  const columns = useMedia(
    usepureReverseArray(breakpoints.map((bp) => `(min-width: ${bp}rem)`)),
    [4, 3, 2],
    1
  );

  const [measureRef, { width }] = useMeasure();

  const [items] = useState(data);

  let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
  let gridItems = items.map((child, i) => {
    const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const xy = [
      (width / columns) * column,
      (heights[column] += child.height / 2) - child.height / 2,
    ]; // X = container width / number of columns * column index, Y = it's just the height of the current column
    return { ...child, xy, width: width / columns, height: child.height / 2 };
  });

  const transitions: any = useTransition(gridItems, (item) => item.css, {
    from: ({ xy, height }) => ({ xy, height, opacity: 0 }),
    enter: ({ xy, height }) => ({ xy, height, opacity: 1 }),
    update: ({ xy, height }) => ({ xy, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 3, tension: 500, friction: 100 },
    trail: 15,
  });

  return (
    <List ref={measureRef} style={{ height: `${Math.max(...heights)}rem` }}>
      {transitions.map(({ item, props: { xy, height, ...rest }, key }: any) => (
        <animated.div
          key={key}
          style={{
            height: `${item.height}rem`,
            transform: xy.interpolate(
              (x: number, y: number) => `translate3d(${x}px,${y}rem,0)`
            ),
            width: item.width,
            ...rest,
          }}
        >
          <Card
            project={{
              id: item.id,
              ano: "",
              demo: "",
              img: item.css,
              projeto: "",
              role: "",
              source: "",
              tools: [""],
              order: "1",
              height: item.height,
            }}
          />
        </animated.div>
      ))}
    </List>
  );
});

export default MasonryGrid;
