import React from "react";

import Hero from "../../components/HeroWithHeader";
import MasonryGrid from "../../components/MasonryGrid";
import SocialIcons from "../../components/SocialIcons";

import {
  Page,
  ContentSection,
  SectionTitle,
  Footer,
} from "../../styles/general";

const Folio = () => {
  return (
    <Page>
      <Hero sm />

      <ContentSection>
        <SectionTitle>FOLIO</SectionTitle>
        <MasonryGrid />
      </ContentSection>

      <Footer>
        <SocialIcons color="dark" />
      </Footer>
    </Page>
  );
};

export default Folio;
