import React from "react";

import { Card, MetaCard, Thumb } from "./styles";

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

const CardComponent: React.FC<CardProps> = ({ project }) => {
  return (
    <Card>
      <Thumb
        backgroundImg={
          "https://images.unsplash.com/photo-1598281802472-51ee16bfa65c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=20"
        }
      />
      <MetaCard>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis
          dolorum excepturi cupiditate tempore totam iure nobis impedit aliquid
          vero?
        </h1>
      </MetaCard>
    </Card>
  );
};

export default CardComponent;
