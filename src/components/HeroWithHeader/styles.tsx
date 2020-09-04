import React from "react";
import styled from "styled-components";

const Div = ({ sm, ...rest }: any) => {
  return <div {...sm} {...rest}></div>;
};

export const HeroWrapper = styled(Div)`
  position: relative;
  width: 100%;
  height: ${(props) => (props.sm ? "30vh" : "100vh")};

  padding: 2.4rem;
  background-image: url("https://images.unsplash.com/photo-1560759995-d237fb70a79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1866&q=60");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;
