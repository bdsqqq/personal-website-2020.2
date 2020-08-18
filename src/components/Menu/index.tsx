import React from "react";
import ReactDOM from "react-dom";

import Header from "../Header";
import { Overlay, Wrapper, Nav, MenuItem } from "./styles";

interface MenuProps {
  isOpen: boolean;
  hide: any;
}
const Menu: React.FC<MenuProps> = ({ isOpen, hide }) =>
  isOpen
    ? ReactDOM.createPortal(
        <>
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
        </>,
        document.body
      )
    : null;

export default Menu;
