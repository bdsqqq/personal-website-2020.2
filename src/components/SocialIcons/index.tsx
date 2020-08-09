import React from "react";

import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

import { SocialIcon, SocialIconsContainer } from "./styles";

interface SocialIconsProps {
  color: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ color }) => {
  return (
    <SocialIconsContainer color={color}>
      <SocialIcon href="#a">
        <FiLinkedin />
      </SocialIcon>
      <SocialIcon href="#a">
        <FiGithub />
      </SocialIcon>
      <SocialIcon href="#a">
        <FiInstagram />
      </SocialIcon>
    </SocialIconsContainer>
  );
};

export default SocialIcons;
