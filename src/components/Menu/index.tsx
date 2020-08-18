import React from "react";

import Header from "../Header";
import { Overlay, Wrapper, Nav, MenuItem } from "./styles";

interface MenuProps {
  isOpen: boolean;
  hide: any;
}
const Menu: React.FC<MenuProps> = ({ isOpen, hide }) => {
  return (
    <Overlay onClick={hide}>
      <Header isOpen={isOpen} toggleIsOpen={hide} />
      <Wrapper>
        <Nav>
          <MenuItem href="#Sobre mim">Sobre mim</MenuItem>
          <MenuItem href="#Folio">Folio</MenuItem>
          <MenuItem href="#contato">Contato</MenuItem>
        </Nav>
      </Wrapper>
    </Overlay>
  );
};

export default Menu;
