import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  opacity: 0.98;
  overflow-x: hidden;
  overflow-y: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.colors.secondaryBlack};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 60%;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primaryWhite};

  font-size: 2.4rem;
  letter-spacing: 0.8rem;
`;
