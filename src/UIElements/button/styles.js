import styled from 'styled-components';

export const ButtonSizes = {
  normal: {
    minWidth: '11rem',
    height: '40px',
    fontSize: '0.8rem',
  },
  big: {
    minWidth: '14rem',
    height: '50px',
    fontSize: '1rem',
  },
};

export const StyledButton = styled.button`
  ${({
    theme, bgColor, fontColor, size,
  }) => {
    const { minWidth, height, fontSize } = ButtonSizes[size];
    return `
      background-color: ${theme.palette.background[bgColor]};
      color: ${theme.palette[fontColor]};
      min-width: ${minWidth};
      height: ${height};
      font-size: ${fontSize};
      &:hover {
        cursor: pointer;
        background-color: ${theme.palette.green};
        border-color: ${theme.palette.green};
        color: ${theme.palette.secondary};
        transition-property: background-color, color, border-color;
        transition-duration: 0.3s, 0.3s, 0.3s;
      }
      &:focus {        
        outline: none;
        border-bottom-color: ${theme.palette.primary};
      }
      &:active {
        transform: translate(0, 1px);
      }
  `;
  }}
`;

export const StyledLink = styled(StyledButton)`
  text-decoration: none;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px;
  font-weight: bold;
  border-color: ${({ theme }) => theme.palette.blue}
`;
