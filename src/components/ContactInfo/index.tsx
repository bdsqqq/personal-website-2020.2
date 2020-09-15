import React from "react";
import {
  FiPhone,
  FiMail,
  FiMessageSquare,
  FiArrowRight,
  FiX,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import SocialIcons from "../SocialIcons";
import {
  Wrapper,
  Header,
  Item,
  Title,
  Label,
  Field,
  BookingButton,
  CloseButton,
} from "./styles";

interface contactInfoProps {
  hide?: () => void;
}

const ContactInfo: React.FC<contactInfoProps> = React.memo(({ hide }) => {
  return (
    <Wrapper>
      <Header>
        <Title>Contato</Title>
        {hide && (
          <CloseButton onClick={hide}>
            <FiX />
          </CloseButton>
        )}
      </Header>

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
      <a
        style={{ textDecoration: "none" }}
        target="/"
        href="https://calendly.com/igorbedesqui/cafezinho"
      >
        <BookingButton>
          agende uma conversa!
          <FiArrowRight />
        </BookingButton>
      </a>
    </Wrapper>
  );
});

export default ContactInfo;
