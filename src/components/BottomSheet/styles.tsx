import styled from "styled-components";
import { motion } from "framer-motion";

export const Sheet = styled(motion.div)`
  z-index: 1100;
  position: fixed;
  left: 2vw;
  height: calc(100vh + 100px);
  width: 96vw;
  border-radius: 12px 12px 0px;
  background: #fff;
  touch-action: none;

  & > div {
    height: 60px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    text-transform: capitalize;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  overflow-x: hidden;
  overflow-y: hidden;

  background: ${(props) => props.theme.colors.secondaryBlack};
`;

export const Button = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1000;

  display: flex;
  align-items: center;

  width: auto;
  height: 6.4rem;
  padding: 1.2rem;
  border-top-left-radius: 2rem;
  background: ${(props) => props.theme.colors.secondaryBlack};

  color: ${(props) => props.theme.colors.primaryWhite};
  font-size: 3.6rem;

  & > svg {
    margin: 0 0.5rem;
  }
`;
