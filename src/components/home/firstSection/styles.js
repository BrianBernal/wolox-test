//  libraries
import styled from 'styled-components';

//  images
import bgImage from 'assets/Backgrounds/Bg_Header@3x.png';
import bgIlustraHero from 'assets/Img Hero/Ic_ilustra_Hero.png';

//  components
import WrapperSection from 'UIElements/WrapperSection/WrapperSection';

export const WelcomeWrapperSection = styled(WrapperSection)`
  background-image: url(${bgIlustraHero}), url(${bgImage});
  background-repeat: no-repeat;
  background-position: 55vw 80%,center center;
  background-size: 29vw 29vw, contain;
  height: 88vh;
  max-height: 45rem;
  margin-bottom: 4rem;

  .welcome-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 350px){
      padding: 0;
    }
  }

  @media screen and (max-width: 500px) {
    background-position: 47vw 80%,center center;
    background-size: 45vw 45vw, contain;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1400px) {
    background-size: 22vw 22vw, contain;
  }
`;

export const H1 = styled.h1`
  font-weight: normal;
  & .bold {
    font-weight: bold;
  }
  & .green {
    color: ${({ theme }) => theme.palette.green};
  }
`;
