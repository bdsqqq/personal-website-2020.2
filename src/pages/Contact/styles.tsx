import styled from "styled-components";
import { mq, heroImageURL } from "../../styles/global";

export const Page = styled.div`
  min-height: 100vh;
  overflow: auto;

  ${mq[0]} {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
      ),
      url(${heroImageURL});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const PaddingMachine = styled.div`
  margin-top: 4.8rem;
  padding: 2.4rem;
  height: 100%;

  ${mq[0]} {
    margin-top: 8rem;
    padding: 4.8rem;
  }
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  z-index: 10;
  padding: 2.4rem;

  width: 100%;
`;

export const Main = styled.main`
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  min-height: 100vh;

  background-color: ${(props) => props.theme.colors.primaryWhite};

  ${mq[0]} {
    min-width: 48rem;
    max-width: 64rem;
  }
`;

export const Button = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  width: 100%;
  padding: 1.6rem;

  background-color: ${(props) => props.theme.colors.secondaryBlack};
  color: ${(props) => props.theme.colors.primaryWhite};
  font-size: 3.2rem;

  & > svg {
    margin-left: 1.6rem;
  }

  ${mq[0]} {
    font-size: 3.6rem;
  }
`;
