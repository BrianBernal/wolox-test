import styled, { css } from 'styled-components';

export const sizes = {
  normal: {
    minWidth: '11rem',
    height: '40px',
    fontSize: '0.8rem',
  },
  big: {
    minWidth: '12rem',
    height: '50px',
    fontSize: '1rem',
  },
};

export default styled.button`
  ${({
    theme, bgColor, fontColor, size,
  }) => {
    const { minWidth, height, fontSize } = sizes[size];
    return css`
      background-color: ${theme.palette.background[bgColor]};
      color: ${theme.palette[fontColor]};
      min-width: ${minWidth};
      height: ${height};
      font-size: ${fontSize};
  `;
  }}
`;
