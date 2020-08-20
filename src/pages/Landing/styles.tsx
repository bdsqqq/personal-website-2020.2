import styled from "styled-components";
import { mq } from "../../styles/global";

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
  background: url("https://images.unsplash.com/photo-1560759995-d237fb70a79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1866&q=80");
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
  margin-top: 18rem;

  color: ${(props) => props.theme.colors.primaryWhite};

  ${mq[1]} {
    font-size: 4.8rem;
  }
`;

export const HeroWord = styled.span`
  font-size: 7.2rem;

  ${mq[1]} {
    font-size: 14.4rem;
  }
`;

export const Footer = styled.footer`
  padding: 2.4rem;
  position: relative;
  z-index: 1010;
`;
