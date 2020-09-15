import React from "react";

import {
  Page,
  ContentSection,
  SectionTitle,
  SectionSubTitle,
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

import MasonryGrid from "../../components/MasonryGrid";
import HeroWrapper from "../../components/HeroWithHeader";
import BottomSheet, { useBottomSheet } from "../../components/BottomSheet";
import SocialIcons from "../../components/SocialIcons";

const Landing = () => {
  const [isExpanded, expandBottomSheet, hideBottomSheet] = useBottomSheet();

  return (
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
        <SectionTitle>Folio</SectionTitle>
        <SectionSubTitle>
          Clique em uma imagem para revelar ou ocultar detalhes sobre o
          projeto...
        </SectionSubTitle>
        <MasonryGrid />
      </ContentSection>

      <Footer>
        <SocialIcons color="dark" />
      </Footer>
      <BottomSheet
        isExpanded={isExpanded}
        expand={expandBottomSheet}
        hide={hideBottomSheet}
      />
    </Page>
  );
};

export default Landing;
