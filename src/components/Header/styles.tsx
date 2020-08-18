import styled from "styled-components";
import { mq } from "../../styles/global";

export const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) =>
    props.color === "dark"
      ? props.theme.colors.secondaryBlack
      : props.theme.colors.primaryWhite};
`;

export const MenuIcon = styled.span`
  font-size: 3.6rem;
  text-decoration: none;
  transition: 0.3s ease-in-out;

  ${mq[1]} {
    font-size: 4.8rem;
  }
`;
