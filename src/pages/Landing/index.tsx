import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { Project } from "../../project";

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
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoaded, setIsloaded] = useState(false);
  const [isExpanded, expandBottomSheet, hideBottomSheet] = useBottomSheet();

  const FetchProjects = () => {
    db.collection("projects")
      .orderBy("order", "asc")
      .get()
      .then((snapshot) => {
        let projects: Project[] = [];
        snapshot.forEach((doc) =>
          projects.push({ ...(doc.data() as Project) })
        );
        setProjects(projects);
        setIsloaded(true);
        //console.log(projects, "fetched projects");
      });
  };

  useEffect(() => {
    FetchProjects();
  }, []);

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
        {!isLoaded ? (
          <span>Carregand</span>
        ) : (
          <MasonryGrid projects={projects} />
        )}
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
