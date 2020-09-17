import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface thumbProps {
  backgroundImg?: string;
}

const ThumbBase: React.FC<thumbProps> = (props) => <figure {...props} />;

export const Card = styled(motion.article)`
  position: relative;
  height: 100%;
  height: 100%;
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
  background-size: cover;

  border: 0;
  outline: 0;
  box-shadow: 0px 3px 1px -4px rgba(40, 40, 40, 0.1),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const MetaCard = styled(motion.section)`
  width: 95%;
  max-height: 95%;
  transform-origin: 50% 50%;
  position: absolute;
  z-index: 10;
  right: 0;
  bottom: 0;

  padding: 1em;
  background-color: ${(props) => props.theme.colors.secondaryBlack};
  color: ${(props) => props.theme.colors.primaryWhite};
  overflow: auto;
`;

export const MetaCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MetaCardTitle = styled.h1`
  text-transform: uppercase;
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: 0.1em;
`;

export const MetaCardYear = styled.h2`
  margin-left: 0.4rem;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const MetaCardBody = styled.main`
  margin: 1rem auto;
`;

export const MetaCardRole = styled.p`
  font-size: 1.6rem;
`;

export const MetaCardTools = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
`;

export const MetaCardTool = styled.span`
  margin-right: 0.4rem;
  border: solid 1px ${(props) => props.theme.colors.fadedWhite};
  padding: 0 0.8rem;
  border-radius: 1.6rem;
  line-height: 2rem;
`;

export const MetaCardButtonsWrapper = styled.div`
  margin: 2rem auto;
`;

export const MetaCardButton = styled.a`
  cursor: pointer;

  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  vertical-align: middle;

  padding: 0.4rem 1rem;
  margin: 0.8rem;
  border-radius: 0.4rem;
  border: 0;
  outline: 0;
  min-width: 6.4rem;
  background-color: ${(props) => props.theme.colors.primaryBlack};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  font-weight: 500;
  font-size: 1.6rem;
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primaryWhite};

  transition: all 0.2s ease-in;

  &:hover,
  &:focus {
    opacity: 0.9;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  &:active {
    background-color: ${(props) => props.theme.colors.secondaryBlack};
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  & > * {
    margin: 0 0.2rem;
  }
`;

export const MetaCardDetails = styled.p`
  margin: 0.8rem 0;
  font-size: 1.6rem;
`;
