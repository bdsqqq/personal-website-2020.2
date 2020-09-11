import React from "react";

import {
  Page,
  ContentSection,
  SectionTitle,
  SectionText,
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
        <SectionTitle>Lorem, ipsum dolor.</SectionTitle>
        <SectionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          eum voluptatem illo esse repellendus quas libero omnis, repellat quis
          odio placeat quia, culpa error optio a est saepe sapiente itaque
          tempora debitis officia atque. Mollitia aliquam distinctio quasi iure
          tempora consequatur rerum laudantium, molestiae, atque, culpa optio
          nostrum? Tenetur ipsum consequatur tempore accusamus explicabo
          incidunt culpa qui eligendi repudiandae fugit ipsa minima enim
          laudantium perspiciatis dolore laboriosam cum necessitatibus aperiam,
          odit molestias non voluptates cupiditate labore. Dolor omnis veniam
          sapiente.
          <br /> <br /> <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          cumque ipsa fuga magnam excepturi velit, tempora laborum natus!
          Officiis, dolores.
        </SectionText>
      </ContentSection>

      <Footer>
        <SocialIcons color="dark" />
      </Footer>
    </Page>
  );
};

export default Landing;
