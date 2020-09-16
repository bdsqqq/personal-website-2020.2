import React from "react";
import useMedia from "../../hooks/useMedia";
import usepureReverseArray from "../../hooks/usePureReverseArray";
import useMeasure from "react-use-measure";

import Card from "../Card";
import { Project } from "../../project";

import { List, MasonryItem } from "./styles";
import { breakpoints } from "../../styles/global";

interface masonryGridProps {
  projects: Project[];
}

interface motionProps {
  x?: number;
  y?: number;
  height?: number;
}

const MasonryGrid: React.FC<masonryGridProps> = React.memo(({ projects }) => {
  // The array is being reverted instead of the number of columns because when i do it the other way it gets stuck on the number of columnsin [0]
  const columns = useMedia(
    usepureReverseArray(breakpoints.map((bp) => `(min-width: ${bp}rem)`)),
    [4, 3, 2],
    1
  );

  const [measureRef, { width }] = useMeasure();

  const [...items] = projects;

  let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
  let gridItems = items.map((child, i) => {
    const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const x = (width / columns) * column;
    const y = (heights[column] += child.height / 2) - child.height / 2;
    // X = container width / number of columns * column index, Y = it's just the height of the current column
    return { ...child, x, y, width: width / columns, height: child.height / 2 };
  });

  let variants = {
    initial: ({ height }: motionProps) => ({
      height: `${height}px`,
      opacity: "0",
    }),
    visible: ({ height }: motionProps) => ({
      height: `${height}px`,
      opacity: "1",
    }),
  };

  return (
    <List ref={measureRef} style={{ height: `${Math.max(...heights)}px` }}>
      {console.log(gridItems)}
      {gridItems.map((gridItem, index) => (
        <MasonryItem
          layout
          key={index}
          initial="initial"
          custom={gridItem}
          animate="visible"
          variants={variants}
          style={{
            x: gridItem.x,
            y: gridItem.y,
            width: gridItem.width,
          }}
        >
          <Card project={gridItem} />
        </MasonryItem>
      ))}
    </List>
  );
});

export default MasonryGrid;
