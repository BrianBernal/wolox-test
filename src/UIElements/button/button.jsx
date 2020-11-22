//  libraries
import React from 'react';
import PropTypes from 'prop-types';

//  styles
import paletteColors from 'styles/theme';
import { StyledButton, StyledLink, ButtonSizes } from './styles';

export default function Button({
  children, bgColor, fontColor, size, type, variant, onClick, href,
}) {
  if (variant === 'button') {
    return (
      <StyledButton
        bgColor={bgColor}
        fontColor={fontColor}
        size={size}
        type={type}
        onClick={onClick}
      >
        {children}
      </StyledButton>
    );
  }
  return (
    <StyledLink
      as='a'
      bgColor={bgColor}
      fontColor={fontColor}
      size={size}
      type={type}
      onClick={onClick}
      target='_blank'
      href={href}
    >
      {children}
    </StyledLink>
  );
}

const { palette } = paletteColors;
const { oneOf } = PropTypes;
const { keys } = Object;
Button.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: oneOf(keys(palette.background)),
  fontColor: oneOf(keys(palette)),
  size: oneOf(keys(ButtonSizes)),
  type: oneOf(['button', 'submit', 'reset']),
  variant: oneOf(['button', 'hyperlink']),
  onClick: PropTypes.func,
  href: PropTypes.string,
};

Button.defaultProps = {
  bgColor: 'transparent',
  fontColor: 'blue',
  size: 'normal',
  type: 'button',
  variant: 'button',
  onClick: () => {},
  href: '/#',
};
