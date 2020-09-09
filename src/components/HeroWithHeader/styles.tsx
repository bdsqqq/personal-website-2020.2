import React from "react";
import styled from "styled-components";
import { mq } from "../../styles/global";

const Div = ({ sm, ...rest }: any) => {
  return <div {...sm} {...rest}></div>;
};

export const HeroWrapper = styled(Div)`
  position: relative;
  width: 100%;
  height: ${(props) => (props.sm ? "30vh" : "100vh")};
  min-height: ${(props) => (props.sm ? "32rem" : "48rem")};
  padding: 2.4rem;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)),
    url("https://images.unsplash.com/photo-1560759995-d237fb70a79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1866&q=60");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const PageTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
`;

export const PageTitle = styled.h1`
  font-size: 6.4rem;
  letter-spacing: 0.2em;
  margin-bottom: 2.4rem;
  color: ${(props) => props.theme.colors.primaryWhite};

  ${mq[0]} {
    font-size: 8.8rem;
  }
`;
