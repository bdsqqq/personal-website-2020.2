import styled from "styled-components";
import { mq } from "../../styles/global";

export const LogoType = styled.p`
  color: ${(props) => props.color || props.theme.colors.primaryWhite};

  font-size: 1.8rem;
  line-height: 1.6rem;
  letter-spacing: 20%;
  text-transform: uppercase;

  ${mq[1]} {
    font-size: 2.4rem;
    line-height: 2.8rem;
  }
`;
