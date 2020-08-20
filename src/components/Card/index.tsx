import React from "react";

import {
  CardWrapper,
  CardImage,
  MetaWrapper,
  Meta,
  MetaHeader,
  MetaHeaderItem,
  MetaRole,
  MetaToolsWrapper,
  MetaButtonsWrapper,
  Button,
  DisabledButton,
  Tool,
} from "./styles";

interface CardProps {
  project: {
    id: string;
    ano: string;
    demo: string;
    img: string;
    projeto: string;
    role: string;
    source?: string;
    tools: string[];
    order: string;
  };
}

const Card: React.FC<CardProps> = ({ project }) => {
  const Tools = project.tools;

  return (
    <CardWrapper>
      <CardImage src={project.img} alt={project.projeto} />
      <MetaWrapper>
        <Meta>
          <MetaHeader>
            <MetaHeaderItem>{project.projeto}</MetaHeaderItem>
            <MetaHeaderItem>{project.ano}</MetaHeaderItem>
          </MetaHeader>
          <MetaRole>{project.role}</MetaRole>
          <MetaToolsWrapper>
            {Tools.map((val: string, index: number) => (
              <Tool key={index}>{val}</Tool>
            ))}
          </MetaToolsWrapper>
          <MetaButtonsWrapper>
            <Button target="_blank" href={project.demo}>
              Demo
            </Button>
            {!project.source ? (
              <DisabledButton>Código privado</DisabledButton>
            ) : (
              <Button target="_blank" href={project.source}>
                Código
              </Button>
            )}
          </MetaButtonsWrapper>
        </Meta>
        <span></span>
      </MetaWrapper>
    </CardWrapper>
  );
};

export default Card;
