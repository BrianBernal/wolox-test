//  libraries
import { createGlobalStyle } from 'styled-components';

//  Fira fonts
import firaRegular from 'assets/Fonts/Fira_Sans/FiraSans-Regular.ttf';
import firaBold from 'assets/Fonts/Fira_Sans/FiraSans-Bold.ttf';
import firaItalic from 'assets/Fonts/Fira_Sans/FiraSans-Italic.ttf';
import firaBoldItalic from 'assets/Fonts/Fira_Sans/FiraSans-BoldItalic.ttf';
import firaBoldExtraBold from 'assets/Fonts/Fira_Sans/FiraSans-ExtraBold.ttf';
import firaBoldExtraBoldItalic from 'assets/Fonts/Fira_Sans/FiraSans-ExtraBoldItalic.ttf';
import firaBoldLight from 'assets/Fonts/Fira_Sans/FiraSans-Light.ttf';
import firaBoldLightItalic from 'assets/Fonts/Fira_Sans/FiraSans-LightItalic.ttf';

//  Montserrat fonts
import montserratRegular from 'assets/Fonts/Montserrat/Montserrat-Regular.ttf';
import montserratMedium from 'assets/Fonts/Montserrat/Montserrat-Medium.ttf';
import montserratMediumItalic from 'assets/Fonts/Montserrat/Montserrat-MediumItalic.ttf';
import montserratBold from 'assets/Fonts/Montserrat/Montserrat-Bold.ttf';
import montserratSemiBold from 'assets/Fonts/Montserrat/Montserrat-SemiBold.ttf';
import montserratItalic from 'assets/Fonts/Montserrat/Montserrat-Italic.ttf';
import montserratBoldItalic from 'assets/Fonts/Montserrat/Montserrat-BoldItalic.ttf';
import montserratExtraBold from 'assets/Fonts/Montserrat/Montserrat-ExtraBold.ttf';
import montserratExtraBoldItalic from 'assets/Fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf';
import montserratLight from 'assets/Fonts/Montserrat/Montserrat-Light.ttf';
import montserratExtraLightItalic from 'assets/Fonts/Montserrat/Montserrat-LightItalic.ttf';

// theme
import theme from './theme';

export default createGlobalStyle`
  // fira
  
  @font-face {
    font-family: fira;
    src: url(${firaRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: fira;
    src: url(${firaBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: fira;
    src: url(${firaItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: fira;
    src: url(${firaBoldItalic}) format('truetype');
    font-weight: bold;
    font-style: italic;
  }
  @font-face {
    font-family: fira;
    src: url(${firaBoldExtraBold}) format('truetype');
    font-weight: bolder;
    font-style: normal;
  }
  @font-face {
    font-family: fira;
    src: url(${firaBoldExtraBoldItalic}) format('truetype');
    font-weight: bolder;
    font-style: italic;
  }
  @font-face {
    font-family: fira;
    src: url(${firaBoldLight}) format('truetype');
    font-weight: lighter;
    font-style: normal;
  }
  @font-face {
    font-family: fira;
    src: url(${firaBoldLightItalic}) format('truetype');
    font-weight: lighter;
    font-style: italic;
  }

  // montserrat
  
  @font-face {
    font-family: montserrat;
    src: url(${montserratRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: montserrat;
    src: url(${montserratBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: montserrat;
    src: url(${montserratMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: montserrat;
    src: url(${montserratMediumItalic}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: montserrat;
    src: url(${montserratSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: montserrat;
    src: url(${montserratItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: montserrat;
    src: url(${montserratBoldItalic}) format('truetype');
    font-weight: bold;
    font-style: italic;
  }
  @font-face {
    font-family: montserrat;
    src: url(${montserratExtraBold}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: montserrat;
    src: url(${montserratExtraBoldItalic}) format('truetype');
    font-weight: bolder;
    font-style: italic;
  }
  /* @font-face {
    font-family: montserrat;
    src: url(${montserratLight}) format('truetype');
    font-weight: lighter;
    font-style: normal;
  } */
  @font-face {
    font-family: montserrat;
    src: url(${montserratExtraLightItalic}) format('truetype');
    font-weight: lighter;
    font-style: italic;
  }

  html, body, section, footer, aside, div {
    scroll-behavior: smooth;
  }

  body {
    font-family: montserrat, fira, 'Times New Roman', Times, serif;
    font-size: 20px;
    background-color: ${theme.palette.background.light};
    color: ${theme.palette.text};
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 38px;
  }
  h2 {
    font-size: 36px;
  }
  h3 {
    font-size: 34px;
  }
  h4 {
    font-size: 32px;
  }
  h5 {
    font-size: 30px;
  }
  h6 {
    font-size: 28px;
  }

  button {
    min-width: 11rem;
    height: 40px;
    border-radius: 35px;
    border: ${theme.palette.blue} solid 1px;
    background-color: rgba(0, 0, 0, 0);
    color: ${theme.palette.blue};
    font-family: montserrat, fira, 'Times New Roman', Times, serif;
    font-size: 0.8rem;
    font-weight: bold;
  }
`;
