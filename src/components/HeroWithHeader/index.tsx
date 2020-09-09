import React from "react";

import Header, { useHeaderMenu } from "../Header";
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
  const [menuIsOpen, ToggleMenu] = useHeaderMenu();

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
