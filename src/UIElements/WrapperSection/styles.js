import styled from 'styled-components';

export default styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  width: 100%;  
  & > div, > header, > footer, > section {
    width: 100%;
    max-width: 1135px;
    padding-left: 72px;
    padding-right: 72px;
  }
`;
