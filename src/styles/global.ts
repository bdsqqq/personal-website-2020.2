import { createGlobalStyle } from "styled-components";

export const breakpoints = [40, 64, 144];

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}rem)`);

export const heroImageURL =
  "https://images.unsplash.com/photo-1560759995-d237fb70a79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1866&q=60";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
    }
    body html #root {
        height: 100%;
    }

    :root{
        font-family: 'Roboto', sans-serif;
        font-size: 60%;
    }

${mq[0]}{
    :root{
        font-size: 62.5%
    }
    }
`;
