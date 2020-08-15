import React, { useState } from "react";

import { Page, Wrapper, Main, Title, Footer } from "./styles";

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
        <Header color="light" isOpen={menuIsOpen} toggleIsOpen={ToggleMenu} />
        <Wrapper>
          <Main>
            <Title data-testid="MainTitleText">
              Desenvolvedor Web pronto para criar algo incrivel!
            </Title>
          </Main>
        </Wrapper>

        <Footer>
          <SocialIcons color="light" />
        </Footer>
        <Menu />
      </Page>
    </>
  );
};

export default Landing;
