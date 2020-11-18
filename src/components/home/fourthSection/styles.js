//  libraries
import styled from 'styled-components';

//  components
import WrapperSection from 'UIElements/WrapperSection/WrapperSection';

//  images
import bgImageFooter from 'assets/Backgrounds/Bg_Footer@3x.png';

export default styled(WrapperSection)`
  background: url(${bgImageFooter}) no-repeat center center;
  background-size: cover;
  .thanks-container {
    text-align: center;
    padding: 1rem;
  }
`;
