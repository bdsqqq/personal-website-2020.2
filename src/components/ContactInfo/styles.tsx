import styled from "styled-components";
import { mq } from "../../styles/global";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;

  ${mq[1]} {
    min-height: 48rem;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  font-size: 2.4rem;

  ${mq[1]} {
    font-size: 4.8rem;
    margin-bottom: 4.8rem;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  align-items: flex-start;
`;

export const Title = styled.h1`
  letter-spacing: 0.2em;
  font-weight: 500;
  color: ${(props) => props.theme.colors.secondaryBlack};
`;

export const Label = styled.h3`
  display: inline-flex;
  align-items: flex-start;

  font-size: 2.4rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.fadedBlack};

  & > svg {
    margin: auto 0.8rem;
  }
`;

export const Field = styled.a`
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  width: 100%;
  word-wrap: break-word;
  color: ${(props) => props.theme.colors.secondaryBlack};
`;

export const BookingButton = styled.div`
  cursor: pointer;

  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  vertical-align: middle;

  width: 100%;
  padding: 2.4rem;
  border-radius: 4rem;

  outline: 0;
  min-width: 6.4rem;
  background-color: ${(props) => props.theme.colors.primaryBlack};
  box-shadow: 0px 12px 4px -8px rgba(0, 0, 0, 0.2),
    0px 8px 8px 0px rgba(0, 0, 0, 0.14), 0px 4px 20px 0px rgba(0, 0, 0, 0.12);

  font-weight: 500;
  font-size: 2.4rem;
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primaryWhite};

  transition: all 0.2s ease-in;

  &:hover,
  &:focus {
    opacity: 0.97;
    box-shadow: 0px 8px 16px -4px rgba(0, 0, 0, 0.3),
      0px 16px 20px 0px rgba(0, 0, 0, 0.2), 0px 4px 40px 0px rgba(0, 0, 0, 0.18);
  }

  &:active {
    ${(props) => props.theme.colors.primaryBlack}
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  & > * {
    margin: 0 0.2rem;
  }

  & > svg {
    margin-left: 1.6rem;
  }

  ${mq[1]} {
    font-size: 3.6rem;
  }
`;

export const CloseButton = styled.div`
  cursor: pointer;
`;
