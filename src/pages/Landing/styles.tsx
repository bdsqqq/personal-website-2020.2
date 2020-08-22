import styled from "styled-components";
import { mq } from "../../styles/global";

import IgorSVG from "../../components/IgorSVG";

export const Page = styled.div`
  position: relative;
  width: 100%;
  /*background: ${(props) => props.theme.colors.secondaryBlack};*/

  overflow-x: hidden;
`;

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  padding: 2.4rem;
  background-image: url("https://images.unsplash.com/photo-1560759995-d237fb70a79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1866&q=60");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 93%;

  ${mq[0]} {
    flex-direction: row;
    height: 90%;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-flow: column;
`;

export const HeroText = styled.h1`
  font-weight: 700;
  font-size: 3.6rem;
  letter-spacing: 0.2em;
  max-width: 80rem;
  margin-top: 11.25vh;

  color: ${(props) => props.theme.colors.primaryWhite};

  ${mq[1]} {
    margin-top: 18rem;
    font-size: 4.8rem;
    margin-left: 2rem;
  }
`;

export const HeroWord = styled.span`
  font-size: 7.2rem;

  ${mq[1]} {
    font-size: 14.4rem;
  }
`;

export const IgorWrapper = styled.div`
  display: flex;
  position: relative;
  z-index: 10;

  ${mq[1]} {
    flex-direction: row;
    margin-bottom: -50vh;
    align-items: flex-end;
    justify-content: flex-end;
    flex-shrink: 0.6;
  }
`;

export const StyledIgorSVG = styled(IgorSVG)`
  scale: 0.3;
`;

export const ContentSection = styled.article`
  position: relative;
  margin-top: -8rem;
  border-radius: 6rem 0 0 0;
  min-height: 50vh;
  padding: 6rem 4rem;

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
