import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonSizes = {
  normal: {
    minWidth: '11rem',
    height: '36px',
    fontSize: '0.8rem',
  },
  big: {
    minWidth: '14rem',
    height: '46px',
    fontSize: '1rem',
  },
};

const buttonStyles = css`
  ${({
    theme, $bgColor, $fontColor, $size,
  }) => {
    const { minWidth, height, fontSize } = ButtonSizes[$size];
    return `
      background-color: ${theme.palette.background[$bgColor]};
      color: ${theme.palette[$fontColor]};
      min-width: ${minWidth};
      height: ${height};
      font-size: ${fontSize};

      text-decoration: none;
      border-radius: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: solid 1px;
      font-weight: bold;
      border-color: ${$bgColor === 'green' ? theme.palette.green : theme.palette.blue};

      &:focus {        
        outline: none;
        border-right-color: ${theme.palette.primary};
      }
      &:active {
        transform: translate(0, 1px);
      }
      &:hover {
        cursor: pointer;
        background-color: ${$bgColor === 'green' ? theme.palette.blue : theme.palette.green};
        border-color: ${$bgColor === 'green' ? theme.palette.blue : theme.palette.green};
        color: ${theme.palette.secondary};
        transition-property: background-color, color, border-color;
        transition-duration: 0.3s, 0.3s, 0.3s;
      }
      &:disabled {
        background-color: #bbb;
        border-color: #bbb;
        color: #ddd;
        cursor: default;
      }
      &:disabled:active {
        transform: none;
      }
  `;
  }}
`;

export const StyledButton = styled.button`
  ${buttonStyles}
`;

export const RouterButton = styled(Link)`
  ${buttonStyles}
`;
