import React, { useState } from "react";
import { Project } from "../../project";
import { useSpring, animated } from "react-spring";

import { Card, MetaCard, Thumb } from "./styles";

interface CardProps {
  project: Project;
}

const CardComponent: React.FC<CardProps> = React.memo(({ project }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const AnimatedMetaCard = animated(MetaCard);

  const { scale, opacity } = useSpring<any>({
    config: {
      velocity: 5,
      tension: 500,
      friction: 20,
    },
    from: { scale: "scale3d(0, 0, 0)", opacity: 0 },
    to: {
      scale: expanded ? "scale3d(1, 1, 1)" : "scale3d(0, 0, 0)",
      opacity: expanded ? 0.9 : 0,
    },
  });
  return (
    <Card
      onMouseEnter={() => {
        setExpanded(true);
      }}
      onMouseLeave={() => {
        setExpanded(false);
      }}
    >
      <Thumb backgroundImg={project.img} />
      <AnimatedMetaCard
        style={{
          transform: scale,
          opacity: opacity,
        }}
      >
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis
          dolorum excepturi cupiditate tempore totam iure nobis impedit aliquid
          vero?
        </h1>
      </AnimatedMetaCard>
    </Card>
  );
});

export default CardComponent;
