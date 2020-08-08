import React from "react";
import { LogoType } from "./styles";

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color }) => {
  return (
    <LogoType color={color}>
      igor <br /> bedesqui
    </LogoType>
  );
};

export default Logo;
