import React from "react";

import Header from "../Header";
import { Overlay, Wrapper, Nav, MenuItem } from "./styles";

const Menu: React.FC = () => {
  return (
    <Wrapper>
      <Nav>
        <MenuItem href="#Sobre mim">Sobre mim</MenuItem>
        <MenuItem href="#Folio">Folio</MenuItem>
        <MenuItem href="#contato">Contato</MenuItem>
      </Nav>
    </Wrapper>
  );
};

export default Menu;
