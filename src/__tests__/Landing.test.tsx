import React from "react";
import { render, cleanup } from "@testing-library/react";
import Landing from "../pages/Landing";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/global";

import DefaultTheme from "../styles/themes/default";

describe("Landing Page", () => {
  afterEach(cleanup);

  it("renders the Logo", () => {
    const { getByText } = render(
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <Landing />
      </ThemeProvider>
    );
    const textElement = getByText(/igor bedesqui/i);
    expect(textElement).toBeInTheDocument();
  });

  it("Renders the main title text", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <Landing />
      </ThemeProvider>
    );
    const MainTitleText = getByTestId("MainTitleText");
    expect(MainTitleText).toBeInTheDocument();
  });
});
