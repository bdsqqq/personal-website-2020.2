import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import Header from "../components/Header";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/global";

import DefaultTheme from "../styles/themes/default";

afterEach(cleanup);

it("renders IGOR BEDESQUI", () => {
  const { getByText } = render(
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
  const textElement = getByText(/IGOR BEDESQUI/i);
  expect(textElement).toBeInTheDocument();
});

it("renders the Menu Icon", () => {
  const { getByLabelText } = render(
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
  const svgElement = getByLabelText(/Abrir Menu/i);
  expect(svgElement).toBeInTheDocument();
});

it("renders the Close Icon when the user Clicks the Menu Icon", () => {
  render(
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
  fireEvent.click(screen.getByLabelText("Abrir Menu"));

  expect(screen.getByLabelText("Fechar Menu")).toBeInTheDocument();
});
