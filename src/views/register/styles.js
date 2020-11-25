import styled from 'styled-components';
import bgSection from 'assets/Backgrounds/Bg_Header@3x.png';

export const ContainerDiv = styled.div`
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
  background: url(${bgSection}) no-repeat;
  background-size: contain;
`;

export default ContainerDiv;
