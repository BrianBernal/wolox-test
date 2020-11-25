/* eslint-disable react/jsx-props-no-spreading */
//  libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//  styles
import paletteColors from 'styles/theme';
import { StyledButton, RouterButton, ButtonSizes } from './styles';

export default function Button({
  children,
  bgColor: $bgColor, // Transient props ... styled components feature
  fontColor: $fontColor, // Transient props ... styled components feature
  size: $size, // Transient props ... styled components feature
  type,
  variant,
  onClick,
  href,
  to,
}) {
  const styleProps = {
    $bgColor,
    $fontColor,
    $size,
  };

  if (variant === 'button') {
    return (
      <StyledButton
        {...styleProps}
        type={type}
        onClick={onClick}
      >
        {children}
      </StyledButton>
    );
  }

  if (variant === 'hyperlink') {
    return (
      <StyledButton
        {...styleProps}
        as='a'
        target='_blank'
        href={href}
      >
        {children}
      </StyledButton>
    );
  }

  if (variant === 'router') {
    return (
      <RouterButton
        {...styleProps}
        to={to}
        as={Link}
      >
        {children}
      </RouterButton>
    );
  }
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
  variant: oneOf(['button', 'hyperlink', 'router']),
  onClick: PropTypes.func,
  href: PropTypes.string,
  to: PropTypes.string,
};

Button.defaultProps = {
  bgColor: 'transparent',
  fontColor: 'blue',
  size: 'normal',
  type: 'button',
  variant: 'button',
  onClick: null,
  href: '/#',
  to: '/',
};
