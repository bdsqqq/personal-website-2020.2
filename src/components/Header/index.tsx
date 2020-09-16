import React from "react";

import Logo from "../../components/Logo";
import { HeaderWrapper } from "./styles";

interface HeaderProps {
  color?: "light" | "dark";
}

const Header: React.FC<HeaderProps> = ({ color }) => {
  return (
    <HeaderWrapper color={color}>
      <Logo color={color} />
    </HeaderWrapper>
  );
};

export default Header;
