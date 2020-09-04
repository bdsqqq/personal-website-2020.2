import styled from "styled-components";
import { mq } from "./global";

export const Page = styled.div`
  position: relative;
  width: 100%;
  /*background: ${(props) => props.theme.colors.secondaryBlack};*/

  overflow-x: hidden;
`;

export const ContentSection = styled.article`
  position: relative;
  margin-top: -8rem;
  border-radius: 6rem 0 0 0;
  min-height: 50vh;
  padding: 6rem 2rem;

  background: ${(props) => props.theme.colors.primaryWhite};
  color: ${(props) => props.theme.colors.secondaryBlack};

  ${mq[1]} {
    margin-top: -4rem;
    padding: 6rem 8rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 4.8rem;
  letter-spacing: 0.2em;
`;

export const Footer = styled.footer`
  padding: 2.4rem;
  position: relative;
  z-index: 1010;
`;
