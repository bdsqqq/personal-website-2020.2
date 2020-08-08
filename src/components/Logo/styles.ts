import styled from "styled-components";

export const LogoType = styled.span`
  color: ${(props) => props.color || props.theme.colors.primaryWhite};

  font-size: 2.4rem;
  line-height: 2.8rem;
  letter-spacing: 20%;
  text-transform: uppercase;
`;
