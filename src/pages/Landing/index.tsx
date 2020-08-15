import React, { useState } from "react";

import { Page, Wrapper, Main, Title, Footer } from "./styles";

import useToggleIsOpen from "../../hooks/useToggleState";

import Header from "../../components/Header";
import SocialIcons from "../../components/SocialIcons";

const Landing = () => {
  const [menuIsOpen, setmenuIsOpen] = useState<boolean>(false);

  const ToggleMenu = () => {
    useToggleIsOpen(menuIsOpen, setmenuIsOpen);
  };

  return (
    <>
      <Page>
        <Wrapper>
          <Header color="light" />
          <Main>
            <Title data-testid="MainTitleText">
              Desenvolvedor Web pronto para criar algo incrivel!
            </Title>
          </Main>
        </Wrapper>

        <Footer>
          <SocialIcons color="light" />
        </Footer>
      </Page>
    </>
  );
};

export default Landing;
