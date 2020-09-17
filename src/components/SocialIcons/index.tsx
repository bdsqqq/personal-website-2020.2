import React from "react";

import { FiLinkedin, FiGithub } from "react-icons/fi";

import { SocialIcon, SocialIconsContainer } from "./styles";

interface SocialIconsProps {
  color?: "light" | "dark";
}

const SocialIcons: React.FC<SocialIconsProps> = ({ color }) => {
  return (
    <SocialIconsContainer color={color}>
      <SocialIcon
        href="https://www.linkedin.com/in/igor-bedesqui/"
        target="_blank"
      >
        <FiLinkedin />
      </SocialIcon>
      <SocialIcon href="https://github.com/bdsqqq" target="_blank">
        <FiGithub />
      </SocialIcon>
    </SocialIconsContainer>
  );
};

export default SocialIcons;
