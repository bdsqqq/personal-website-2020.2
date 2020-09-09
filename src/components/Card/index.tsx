import React, { useState } from "react";
import { Project } from "../../project";
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

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      onTap={() => toggleExpanded()}
      onHoverStart={() => handleExpand()}
      onHoverEnd={() => handleShrink()}
    >
      <Thumb backgroundImg={project.img} />
      <MetaCard
        animate={{
          scale: expanded ? 1 : 0,
          opacity: expanded ? 0.98 : 0,
        }}
      >
        <MetaCardHeader>
          <MetaCardTitle>project A</MetaCardTitle>
          <MetaCardYear>{project.year}</MetaCardYear>
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
      </MetaCard>
    </Card>
  );
});

export default CardComponent;
