//  libraries
import styled from 'styled-components';

//  images
import bgImage from 'assets/Backgrounds/Bg_Header@3x.png';
import bgIlustraHero from 'assets/Img Hero/Ic_ilustra_Hero.png';

//  components
import MaxDivWrapperDiv from 'UIElements/maxWidthWrapperDiv/MaxDivWrapperDiv';

export const WelcomeWrapperDiv = styled(MaxDivWrapperDiv)`
  background: url(${bgImage}) no-repeat center center;
  background-size: contain;
  height: 88vh;
  max-height: 45rem;
  margin-bottom: 4rem;

  .welcome-section {
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
