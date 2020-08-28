import styled from "styled-components";

export const Cell = styled.div`
  will-change: transform, width, height, opacity;
  width: 100%;
  height: 100%;
  color: #777777;
  text-transform: uppercase;
  font-size: 10px;

  background-size: cover;
  background-position: center center;
  margin: 1rem;
`;

export const Default = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
`;

export const List = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  & > div {
    position: absolute;
    will-change: transform, width, height, opacity;
    padding: 15px;
  }
  & > div > * {
    position: relative;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-transform: uppercase;
    font-size: 10px;
    line-height: 10px;
    border-radius: 4px;
    box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.2);
  }
`;
