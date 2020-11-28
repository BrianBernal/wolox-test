import styled from 'styled-components';
import { ContainerDiv } from 'views/register/styles';

export const ContainerViewDiv = styled(ContainerDiv)`
  justify-content: flex-start;
  h2 {
    align-self: center;
  }
  input, select {
    margin: 3px 0.5rem;
  }
`;

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: #d2d8e8 0px 1px 12px 0px;
  padding: 2rem;
  margin: 1rem;
  max-width: 250px;
  text-align: center;
`;

export const ContainerSectionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1100px;
  background-color: #fff;
  margin: 1rem 0;

  b {
    font-size: 1.4rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0;
  }
`;

export default CardDiv;
