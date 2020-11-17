//  libraries
import styled from 'styled-components';

//  images
import bgImage from 'assets/Backgrounds/Bg_Header@3x.png';
import bgIlustraHero from 'assets/Img Hero/Ic_ilustra_Hero.png';

//  components
import WrapperSection from 'UIElements/WrapperSection/WrapperSection';

export const WelcomeWrapperSection = styled(WrapperSection)`
  background: url(${bgImage}) no-repeat center center;
  background-size: contain;
  height: 88vh;
  max-height: 45rem;
  margin-bottom: 4rem;

  .welcome-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

export const ImageDiv = styled.div`
  background: url(${bgIlustraHero}) no-repeat center center;
  background-size: cover;
  width: 400px;
  height: 400px;
  transform: scaleX(-1);
  margin-right: 6rem;
  margin-top: 6rem;
`;
