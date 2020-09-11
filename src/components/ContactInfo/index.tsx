import React from "react";
import { FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import SocialIcons from "../SocialIcons";
import { Wrapper, Item, Title, Label, Field } from "./styles";

const ContactInfo = React.memo(() => {
  return (
    <Wrapper>
      <Title>Contato</Title>

      <Item>
        <Label>
          Birilin <FiPhone /> + <FaWhatsapp /> + <FiMessageSquare />
        </Label>
        <Field href="tel:+5511961321158">+55 (11) 96132-1158</Field>
      </Item>

      <Item>
        <Label>
          Email <FiMail />
        </Label>
        <Field href="mailto:igorbedesqui@gmail.com">
          igorbedesqui@gmail.com
        </Field>
      </Item>

      <Item>
        <Label>Sociais</Label>
        <SocialIcons color="dark" />
      </Item>
    </Wrapper>
  );
});

export default ContactInfo;
