import React from "react";

import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

interface SocialIconsProps {
  color: string;
}

const SocialIcons = ({ color }: SocialIconsProps) => {
  return (
    <div>
      <a href="#a">
        <FiLinkedin />
      </a>
      <a href="#a">
        <FiGithub />
      </a>
      <a href="#a">
        <FiInstagram />
      </a>
    </div>
  );
};

export default SocialIcons;
