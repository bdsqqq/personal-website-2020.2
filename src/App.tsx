import React from "react";
import { ThemeProvider } from "styled-components";

import MeasureProvider from "./MeasureContext";

import Routes from "./Routes";
import GlobalStyles from "./styles/global";

import DefaultTheme from "./styles/themes/default";

function App() {
  return (
    <div>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />

        <MeasureProvider>
          <Routes />
        </MeasureProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
