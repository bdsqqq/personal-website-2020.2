import { createGlobalStyle } from "styled-components";

const breakpoints = [40, 64, 144];

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}rem)`);

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
