import styled from "styled-components";

export const List = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  & > div {
    position: absolute;
    will-change: transform, width, height, opacity;
    padding: 1rem;
  }
`;
