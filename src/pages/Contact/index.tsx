import React from "react";
import { FiArrowRight } from "react-icons/fi";

import Header, { useHeaderMenu } from "../../components/Header";
import ContactInfo from "../../components/ContactInfo";
import Menu from "../../components/Menu";

import { HeaderWrapper, Page, PaddingMachine, Main, Button } from "./styles";

const Contact = React.memo(() => {
  const [menuIsOpen, ToggleMenu] = useHeaderMenu();

  return (
    <Page>
      <HeaderWrapper>
        <Header isOpen={menuIsOpen} toggleIsOpen={ToggleMenu} color="dark" />
        <Menu isOpen={menuIsOpen} hide={ToggleMenu} />
      </HeaderWrapper>
      <Main>
        <PaddingMachine>
          <ContactInfo />
        </PaddingMachine>

        <a
          style={{ textDecoration: "none" }}
          target="/"
          href="https://calendly.com/igorbedesqui/cafezinho"
        >
          <Button>
            agende uma conversa!
            <FiArrowRight />
          </Button>
        </a>
      </Main>
    </Page>
  );
});

export default Contact;
