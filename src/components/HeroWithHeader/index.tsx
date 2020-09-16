import React from "react";

import Header from "../Header";
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
  return (
    <HeroWrapper {...rest}>
      <Header color={headerColor} />
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
