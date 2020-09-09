import React, { useState } from "react";

import useToggleIsOpen from "../../hooks/useToggleState";
import Header from "../Header";
import Menu from "../Menu";

import { HeroWrapper, PageTitleWrapper, PageTitle } from "./styles";

interface HeroProps {
  headerColor?: "light" | "dark";
  pageTitle?: string;
  sm?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  headerColor,
  pageTitle,
  children,
  ...rest
}) => {
  const [menuIsOpen, setmenuIsOpen] = useState<boolean>(false);

  const ToggleMenu = () => {
    useToggleIsOpen(menuIsOpen, setmenuIsOpen);
  };
  return (
    <HeroWrapper {...rest}>
      <Header
        color={headerColor}
        isOpen={menuIsOpen}
        toggleIsOpen={ToggleMenu}
      />
      <Menu isOpen={menuIsOpen} hide={ToggleMenu} />
      {pageTitle && (
        <PageTitleWrapper>
          <PageTitle>{pageTitle}</PageTitle>
        </PageTitleWrapper>
      )}
      {children}
    </HeroWrapper>
  );
};

export default Hero;
