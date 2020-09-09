import React from "react";

import Hero from "../../components/HeroWithHeader";
import MasonryGrid from "../../components/MasonryGrid";
import SocialIcons from "../../components/SocialIcons";

import {
  Page,
  ContentSection,
  SectionSubTitle,
  Footer,
} from "../../styles/general";

const Folio = () => {
  return (
    <Page>
      <Hero pageTitle={"Folio"} sm />
      <ContentSection>
        <SectionSubTitle>
          Clique em uma imagem para revelar ou ocultar detalhes sobre o
          projeto...
        </SectionSubTitle>
        <MasonryGrid />
      </ContentSection>

      <Footer>
        <SocialIcons color="dark" />
      </Footer>
    </Page>
  );
};

export default Folio;
