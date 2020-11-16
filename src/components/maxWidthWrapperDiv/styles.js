import styled from 'styled-components';

export default styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  & > div, > header, > footer, > section {
    max-width: 1200px;
    width: 100%;
  }
`;
