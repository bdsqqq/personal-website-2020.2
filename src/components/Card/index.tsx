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

  const variants = {
    open: {
      scale: 1,
      opacity: 0.98,
    },
    closed: {
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <Card
      initial="closed"
      onTap={() => toggleExpanded()}
      onHoverStart={() => handleExpand()}
      onHoverEnd={() => handleShrink()}
    >
      <Thumb backgroundImg={project.img} />
      <MetaCard animate={expanded ? "open" : "closed"} variants={variants}>
        <MetaCardHeader>
          <MetaCardTitle>{project.name}</MetaCardTitle>
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
          {project.description && (
            <MetaCardDetails>{project.description}</MetaCardDetails>
          )}
        </MetaCardBody>
      </MetaCard>
    </Card>
  );
});

export default CardComponent;
