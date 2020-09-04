import React, { useState } from "react";

import useToggleIsOpen from "../../hooks/useToggleState";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import { HeroWrapper } from "./styles";

const Hero = ({ children, ...rest }: any) => {
  const [menuIsOpen, setmenuIsOpen] = useState<boolean>(false);

  const ToggleMenu = () => {
    useToggleIsOpen(menuIsOpen, setmenuIsOpen);
  };
  return (
    <HeroWrapper {...rest}>
      <Header color="light" isOpen={menuIsOpen} toggleIsOpen={ToggleMenu} />
      <Menu isOpen={menuIsOpen} hide={ToggleMenu} />
      {children}
    </HeroWrapper>
  );
};

export default Hero;
