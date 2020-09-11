import styled from "styled-components";
import { mq } from "./global";

export const Page = styled.div`
  position: relative;
  width: 100%;
  background-color: #f2f2f2;

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
    margin-top: -6rem;
    padding: 6rem 8rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 4.8rem;
  letter-spacing: 0.2em;
  margin-bottom: 2.4rem;

  ${mq[1]} {
    font-size: 6.4rem;
  }
`;

export const SectionSubTitle = styled.h3`
  font-size: 2.4rem;
  line-height: 1.2em;
  letter-spacing: 0.2em;
  font-weight: 400;

  ${mq[1]} {
    font-size: 3.6rem;
    margin-bottom: 4rem;
  }
`;

export const SectionText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;

  ${mq[1]} {
    font-size: 3.6rem;
  }
`;

export const Footer = styled.footer`
  padding: 2.4rem;
  position: relative;
  z-index: 1010;
`;
