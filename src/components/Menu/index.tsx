import React from "react";

import Header from "../Header";
import { Overlay, Wrapper, Nav, MenuItem } from "./styles";

interface MenuProps {
  isOpen: boolean;
  toggleIsOpen: any;
}
const Menu: React.FC<MenuProps> = ({ isOpen, toggleIsOpen }) => {
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
