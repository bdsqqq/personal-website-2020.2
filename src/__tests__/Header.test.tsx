import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import Header from "../components/Header";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/global";

import DefaultTheme from "../styles/themes/default";

describe("Header", () => {
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

  it("Swaps the Icon between Open Menu and Close Menu when the user clicks on the Icon", () => {
    render(
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <Header />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByLabelText("Abrir Menu"));

    expect(screen.getByLabelText("Fechar Menu")).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Fechar Menu"));

    expect(screen.getByLabelText("Abrir Menu")).toBeInTheDocument();
  });
});
