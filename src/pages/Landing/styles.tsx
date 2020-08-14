import styled from "styled-components";

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
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 3.6rem;
  letter-spacing: 15%;
`;
