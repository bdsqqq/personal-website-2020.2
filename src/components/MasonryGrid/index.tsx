import React, { useState, useEffect } from "react";
import data from "./data";
import { useTransition, animated } from "react-spring";
import useMedia from "../../hooks/useMedia";
import useMeasure from "react-use-measure";
import { List } from "./styles";

const MasonryGrid = React.memo(() => {
  // Hook1: Tie media queries to the number of columns
  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    [4, 3, 2],
    1
  );
  // Hook2: Measure the width of the container element
  const [bind, { width }] = useMeasure();
  // Hook3: Hold items
  const [items] = useState(data);
  // Form a grid of stacked items using width & columns we got from hooks 1 & 2
  let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
  let gridItems = items.map((child, i) => {
    const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const xy = [
      (width / columns) * column,
      (heights[column] += child.height / 2) - child.height / 2,
    ]; // X = container width / number of columns * column index, Y = it's just the height of the current column
    return { ...child, xy, width: width / columns, height: child.height / 2 };
  });
  // Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions: any = useTransition(gridItems, (item) => item.css, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });
  useEffect(() => {
    console.log(width, heights, columns);
  });
  // Render the grid
  return (
    <List ref={bind} style={{ height: `${Math.max(...heights)}rem` }}>
      {transitions.map(({ item, props: { xy, height, ...rest }, key }: any) => (
        <animated.div
          key={key}
          style={{
            height: `${item.height}rem`,
            transform: xy.interpolate(
              (x: number, y: number) => `translate(${x}px,${y}rem)`
            ),
            ...rest,
          }}
        >
          <div style={{ backgroundImage: `url(${item.css})` }} />
        </animated.div>
      ))}
    </List>
  );
});

export default MasonryGrid;
