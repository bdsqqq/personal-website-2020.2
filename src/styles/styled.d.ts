import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primaryWhite: string;

      primaryBlack: string;
      secondaryBlack: string;

      fadedWhite: string;
    };
  }
}
