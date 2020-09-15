import styled from "styled-components";
import { motion } from "framer-motion";
import { mq } from "../../styles/global";

export const Sheet = styled(motion.div)`
  z-index: 1100;
  position: fixed;
  bottom: -100px;
  right: 0;
  height: calc(50vh + 300px);
  width: 100vw;
  border-radius: 4rem 0 0 0;
  background: #fff;
  touch-action: none;

  & > div {
    height: 80%;
    padding: 2.4rem;
  }

  ${mq[1]} {
    height: 100vh;
    width: 50vw;

    & > div {
      height: 80vh;
      padding: 4.8rem;
    }
  }
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  touch-action: none;

  background: ${(props) => props.theme.colors.secondaryBlack};
`;

export const Button = styled(motion.div)`
  cursor: pointer;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1100;

  display: flex;
  align-items: center;

  max-width: 50vw;
  width: auto;
  height: 6.4rem;
  padding: 1.2rem 2.4rem;
  border-top-left-radius: 2rem;
  background: ${(props) => props.theme.colors.secondaryBlack};

  color: ${(props) => props.theme.colors.primaryWhite};
  font-size: 3.6rem;
  text-transform: uppercase;

  & > svg {
    margin: 0 0.2rem;
  }
`;
