import styled from "styled-components";
import { mq } from "../../styles/global";

import IgorSVG from "../../components/IgorSVG";
import InseptionSVG from "../../components/InseptionSVG";

export const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 93%;
  z-index: 10;

  ${mq[0]} {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 2fr;
    grid-template-rows: 1fr;
    height: 100%;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-flow: column;

  ${mq[0]} {
    grid-row: 1;
    grid-column: 1 / 4;
  }
`;

export const HeroText = styled.h1`
  font-weight: 700;
  font-size: 3.6rem;
  letter-spacing: 0.2em;
  max-width: 40rem;
  margin-top: 11.25vh;

  color: ${(props) => props.theme.colors.primaryWhite};

  ${mq[1]} {
    max-width: 60rem;
    margin-top: 18rem;
    font-size: 4.8rem;
    margin-left: 2rem;
  }

  ${mq[2]} {
    max-width: 80rem;
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
  margin-top: -16rem;

  ${mq[0]} {
    position: relative;
    z-index: 20;
    grid-row: 1;
    grid-column: 3 / -1;
    align-self: end;
    margin-top: 0;
  }
`;

export const StyledIgorSVG = styled(IgorSVG)``;

export const InseptionWrapper = styled.div`
  height: 40%;
  ${mq[0]} {
    position: relative;
    z-index: 10;
    grid-row: 1;
    grid-column: 3 / -1;
    justify-self: center;
    align-self: center;
    height: 70%;
    margin-top: -16rem;
  }
`;

export const StyledInseptionSVG = styled(InseptionSVG)``;
