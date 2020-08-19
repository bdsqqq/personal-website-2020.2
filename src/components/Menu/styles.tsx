import styled from "styled-components";
import { mq } from "../../styles/global";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  opacity: 0.98;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 2.4rem;

  background: ${(props) => props.theme.colors.secondaryBlack};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  margin: 2.4rem auto;
  text-align: center;

  ${mq[1]} {
    max-width: 700px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 60%;

  ${mq[1]} {
    height: 100%;
  }
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primaryWhite};

  font-size: 2.4rem;
  letter-spacing: 0.8rem;

  ${mq[1]} {
    font-size: 3.6rem;
    letter-spacing: 1.2rem;
  }
`;
