import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Logo from "../../components/Logo";

import { HeaderWrapper, MenuIcon } from "./styles";

interface HeaderProps {
  color?: "light" | "dark";
}

const Header: React.FC<HeaderProps> = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeaderWrapper color={color}>
      <Logo color={color} />

      <MenuIcon>
        {isOpen ? (
          <FiX aria-label="Fechar Menu" onClick={toggleIsOpen} />
        ) : (
          <FiMenu aria-label="Abrir Menu" onClick={toggleIsOpen} />
        )}
      </MenuIcon>
    </HeaderWrapper>
  );
};

export default Header;
