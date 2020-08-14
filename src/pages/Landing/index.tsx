import React from "react";

import { Page, Wrapper, Main, Title } from "./styles";

import Header from "../../components/Header";
import SocialIcons from "../../components/SocialIcons";

const Landing = () => {
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

        <footer>
          <SocialIcons color="light" />
        </footer>
      </Page>
    </>
  );
};

export default Landing;
