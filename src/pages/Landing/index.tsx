import React, { useState } from "react";

import { Page, HeroWrapper, Main, HeroText, HeroWord, Footer } from "./styles";

import useToggleIsOpen from "../../hooks/useToggleState";

import Header from "../../components/Header";
import SocialIcons from "../../components/SocialIcons";
import Menu from "../../components/Menu";

const Landing = () => {
  const [menuIsOpen, setmenuIsOpen] = useState<boolean>(false);

  const ToggleMenu = () => {
    useToggleIsOpen(menuIsOpen, setmenuIsOpen);
  };

  return (
    <>
      <Page>
        <HeroWrapper>
          <Header color="light" isOpen={menuIsOpen} toggleIsOpen={ToggleMenu} />
          <Main>
            <HeroText data-testid="MainTitleText">
              Desenvolvedor Web pronto para criar algo <br />
              <HeroWord>INCRIVEL</HeroWord>
            </HeroText>
          </Main>
        </HeroWrapper>

        <Footer>
          <SocialIcons color="dark" />
        </Footer>
        <Menu isOpen={menuIsOpen} hide={ToggleMenu} />
      </Page>
    </>
  );
};

export default Landing;
