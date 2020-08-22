import React, { useState } from "react";

import {
  Page,
  HeroWrapper,
  Hero,
  Main,
  HeroText,
  HeroWord,
  ContentSection,
  IgorWrapper,
  StyledIgorSVG,
  SectionTitle,
  Footer,
} from "./styles";

import useToggleIsOpen from "../../hooks/useToggleState";

import Header from "../../components/Header";
import SocialIcons from "../../components/SocialIcons";
import Menu from "../../components/Menu";

import Card from "../../components/Card";

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
          <Hero>
            <Main>
              <HeroText data-testid="MainTitleText">
                Desenvolvedor Web pronto para criar algo <br />
                <HeroWord>INCRIVEL</HeroWord>
              </HeroText>
            </Main>
            <IgorWrapper>
              <StyledIgorSVG />
            </IgorWrapper>
          </Hero>
        </HeroWrapper>

        <ContentSection>
          <SectionTitle>FOLIO...</SectionTitle>

          {/*<Card
            project={{
              id: "test",
              ano: "test",
              demo: "test",
              img:
                "https://images.unsplash.com/photo-1597938430467-c7a5f65c24f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
              projeto: "test",
              role: "test",
              source: "test",
              tools: ["test", "test"],
              order: "test",
            }}
          />
          <Card
            project={{
              id: "test",
              ano: "test",
              demo: "test",
              img:
                "https://images.unsplash.com/photo-1597688642705-ab966bf086fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
              projeto: "test",
              role: "test",
              tools: ["test", "test"],
              order: "test",
            }}
          />
          <Card
            project={{
              id: "test",
              ano: "test",
              demo: "test",
              img:
                "https://images.unsplash.com/photo-1597892672196-3bb8b5c06171?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
              projeto: "test",
              role: "test",
              source: "test",
              tools: ["test", "test"],
              order: "test",
            }}
          />*/}
        </ContentSection>

        <Footer>
          <SocialIcons color="dark" />
        </Footer>
        <Menu isOpen={menuIsOpen} hide={ToggleMenu} />
      </Page>
    </>
  );
};

export default Landing;
