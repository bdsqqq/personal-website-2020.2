import React from "react";
import { ThemeProvider } from "styled-components";

import Routes from "./Routes";
import GlobalStyles from "./styles/global";

import DefaultTheme from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />

      <Routes />
    </ThemeProvider>
  );
}

export default App;
