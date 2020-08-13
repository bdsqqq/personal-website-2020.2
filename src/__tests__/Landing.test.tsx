import React from "react";
import { render, cleanup } from "@testing-library/react";
import Landing from "../pages/Landing";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/global";

import DefaultTheme from "../styles/themes/default";

afterEach(cleanup);

test("renders Logo", () => {
  const { getByText } = render(
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Landing />
    </ThemeProvider>
  );
  const textElement = getByText(/igor bedesqui/i);
  expect(textElement).toBeInTheDocument();
});
