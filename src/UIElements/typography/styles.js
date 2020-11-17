//  libraries
import styled from 'styled-components';

export default styled.h1`
  font-weight: ${({ weight }) => weight || 'inherit'};
  font-style: ${({ fontStyle }) => fontStyle || 'inherit'};
  color: ${({ color, theme }) => theme.palette[color] || 'inherit'};
`;
