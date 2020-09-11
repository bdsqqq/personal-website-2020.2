import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;

  min-height: 48rem;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;
`;

export const Title = styled.h1`
  font-size: 4.8rem;
  letter-spacing: 0.2em;
  font-weight: 500;
  margin-bottom: 4.8rem;
  color: ${(props) => props.theme.colors.secondaryBlack};
`;

export const Label = styled.h3`
  display: inline-flex;
  align-items: flex-start;

  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: 1.6rem;
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
  word-wrap: break-word;
  color: ${(props) => props.theme.colors.secondaryBlack};
`;
