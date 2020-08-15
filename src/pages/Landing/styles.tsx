import styled from "styled-components";
import { mq } from "../../styles/global";

export const Page = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.primaryBlack};

  padding: 2.4rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Main = styled.main`
  display: flex;
  flex-flow: column;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 3.6rem;
  letter-spacing: 0.95rem;
  max-width: 60rem;
  margin-top: 16rem;

  color: ${(props) => props.theme.colors.primaryWhite};

  ${mq[1]} {
    font-size: 4.8rem;
  }
`;

export const Footer = styled.footer`
  position: relative;
  z-index: 1010;
`;
