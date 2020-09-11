import React from "react";
import ReactDOM from "react-dom";

import Header from "../Header";
import { Overlay, SVG, Wrapper, Nav, MenuItem } from "./styles";
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
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/Folio">Folio</MenuItem>
                <MenuItem to="/Contact">Contato</MenuItem>
              </Nav>
            </Wrapper>
            <SVG
              viewBox="0 0 950 208"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M65.2969 0.25L111 142.703L156.562 0.25H221.531V205H172.031V157.188L176.812 59.3125L127.312 205H94.6875L45.0469 59.1719L49.8281 157.188V205H0.46875V0.25H65.2969Z"
                fill="white"
                fill-opacity="0.03"
              />
              <path
                d="M437.616 118.234H359.991V167.031H451.678V205H310.631V0.25H451.959V38.3594H359.991V81.5312H437.616V118.234Z"
                fill="white"
                fill-opacity="0.03"
              />
              <path
                d="M700.388 205H651.309L578.747 77.5938V205H529.388V0.25H578.747L651.169 127.656V0.25H700.388V205Z"
                fill="white"
                fill-opacity="0.03"
              />
              <path
                d="M949.8 0.25V134.266C949.8 149.453 946.566 162.625 940.097 173.781C933.628 184.844 924.347 193.281 912.253 199.094C900.159 204.906 885.862 207.812 869.362 207.812C844.425 207.812 824.784 201.344 810.441 188.406C796.097 175.469 788.784 157.75 788.503 135.25V0.25H838.144V136.234C838.706 158.641 849.112 169.844 869.362 169.844C879.581 169.844 887.316 167.031 892.566 161.406C897.816 155.781 900.441 146.641 900.441 133.984V0.25H949.8Z"
                fill="white"
                fill-opacity="0.03"
              />
            </SVG>
          </Overlay>
        </>,
        document.body
      )
    : null;

export default Menu;
