import styled from "styled-components";

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: max-content;

  & > a {
    color: ${(props) => props.color || props.theme.colors.primaryWhite};
  }

  & > a + a {
    margin-left: 2.4rem;
  }
`;

const SocialIcon = styled.a`
  font-size: 2.4rem;
  text-decoration: none;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;

export { SocialIcon };
