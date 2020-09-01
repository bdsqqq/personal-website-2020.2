import React, { useState } from "react";
import { Project } from "../../project";
import { useSpring, animated } from "react-spring";
import { FiCode, FiPlay } from "react-icons/fi";

import {
  Card,
  Thumb,
  MetaCard,
  MetaCardHeader,
  MetaCardTitle,
  MetaCardYear,
  MetaCardBody,
  MetaCardRole,
  MetaCardTools,
  MetaCardTool,
  MetaCardButtonsWrapper,
  MetaCardButton,
  MetaCardDetails,
} from "./styles";

interface CardProps {
  project: Project;
}

const CardComponent: React.FC<CardProps> = React.memo(({ project }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpand = () => {
    setExpanded(true);
  };
  const handleShrink = () => {
    setExpanded(false);
  };

  const AnimatedMetaCard = animated(MetaCard);

  const { scale, opacity } = useSpring<any>({
    config: {
      velocity: 5,
      tension: 350,
      friction: 20,
    },
    from: { scale: "scale3d(0, 0, 0)", opacity: 0 },
    to: {
      scale: expanded ? "scale3d(1, 1, 1)" : "scale3d(0, 0, 0)",
      opacity: expanded ? 0.98 : 0,
    },
  });
  return (
    <Card onMouseEnter={handleExpand} onMouseLeave={handleShrink}>
      <Thumb backgroundImg={project.img} />
      <AnimatedMetaCard
        style={{
          transform: scale,
          opacity: opacity,
        }}
      >
        <MetaCardHeader>
          <MetaCardTitle>project A</MetaCardTitle>
          <MetaCardYear>{project.ano}</MetaCardYear>
        </MetaCardHeader>
        <MetaCardBody>
          <MetaCardRole>{project.role}</MetaCardRole>
          <MetaCardTools>
            {project.tools.map((tool, index) => (
              <MetaCardTool key={`tool-${index}`}>{tool + " "}</MetaCardTool>
            ))}
          </MetaCardTools>
          {(project.demo || project.source) && (
            <MetaCardButtonsWrapper>
              {project.demo && (
                <MetaCardButton href={project.demo} target="_blank">
                  <FiPlay /> <span> Demo </span>
                </MetaCardButton>
              )}
              {project.source && (
                <MetaCardButton href={project.source} target="_blank">
                  <FiCode /> <span> Código </span>
                </MetaCardButton>
              )}
            </MetaCardButtonsWrapper>
          )}
          <MetaCardDetails>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
            possimus dicta natus vel reprehenderit veniam quos impedit numquam
            placeat ratione molestias odit officia culpa, excepturi hic voluptas
            dignissimos maiores labore fugit et facere aperiam, consectetur
            nesciunt sed. Amet, voluptatem vel.
          </MetaCardDetails>
        </MetaCardBody>
      </AnimatedMetaCard>
    </Card>
  );
});

export default CardComponent;
