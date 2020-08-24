import React from "react";
import styled from "styled-components";

interface thumbProps {
  backgroundImg?: string;
}

const ThumbBase: React.FC<thumbProps> = (props) => <div {...props} />;

export const Card = styled.div`
  position: relative;
  width: 24rem;
  height: 36rem;
  margin: 1rem;

  & > * {
    border-radius: 15px;
  }
`;

export const Thumb = styled(ThumbBase)`
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 90%;
  background: ${(props) =>
    `url(${props.backgroundImg}) no-repeat center center`};
`;

export const MetaCard = styled.div`
  width: 90%;
  max-height: 90%;
  transform-origin: 50% 50%;
  position: absolute;
  z-index: 10;
  right: 0;
  bottom: 0;

  padding: 1em;
  background-color: #000000f0;
  color: #f2f2f2;
  overflow: hidden;
`;
