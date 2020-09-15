import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";

import DefaultTheme from "./styles/themes/default";
import Landing from "./pages/Landing";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />

      <Landing />
    </ThemeProvider>
  );
}

export default App;
