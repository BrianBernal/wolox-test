import { createGlobalStyle } from 'styled-components';
import fira from 'assets/Fonts/Fira_Sans/FiraSans-Regular.ttf';
import montserrat from 'assets/Fonts/Montserrat/Montserrat-Regular.ttf';

export const theme = {
  main: 'mediumseagreen',
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: fira;
    src: url(${fira});
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: montserrat;
    src: url(${montserrat});
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: montserrat, fira, 'Times New Roman', Times, serif;
    font-size: 15px;
  }

  h1 {
    font-family: fira, montserrat, 'Times New Roman', Times, serif;
  }
`;
