import React from "react";

import {
  Page,
  ContentSection,
  SectionTitle,
  Footer,
} from "../../styles/general";

import {
  Hero,
  Main,
  HeroText,
  HeroWord,
  IgorWrapper,
  StyledIgorSVG,
  InseptionWrapper,
  StyledInseptionSVG,
} from "./styles";

import HeroWrapper from "../../components/HeroWithHeader";
import SocialIcons from "../../components/SocialIcons";

const Landing = () => {
  return (
    <>
      <Page>
        <HeroWrapper>
          <Hero>
            <Main>
              <HeroText data-testid="MainTitleText">
                Desenvolvedor Web pronto para criar algo <br />
                <HeroWord>INCRIVEL</HeroWord>
              </HeroText>
            </Main>
            <InseptionWrapper>
              <StyledInseptionSVG />
            </InseptionWrapper>
            <IgorWrapper>
              <StyledIgorSVG />
            </IgorWrapper>
          </Hero>
        </HeroWrapper>

        <ContentSection>
          <SectionTitle>Something Something</SectionTitle>
        </ContentSection>

        <Footer>
          <SocialIcons color="dark" />
        </Footer>
      </Page>
    </>
  );
};

export default Landing;
