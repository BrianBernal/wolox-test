//  libraries
import React from 'react';
import PropTypes from 'prop-types';

//  styles
import paletteColors from 'styles/theme';
import StyedButton, { sizes } from './styles';

export default function Button({
  children, bgColor, fontColor, size,
}) {
  return (
    <StyedButton
      bgColor={bgColor}
      fontColor={fontColor}
      size={size}
    >
      {children}
    </StyedButton>
  );
}

const { palette } = paletteColors;
const { oneOf } = PropTypes;
const { keys } = Object;
Button.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: oneOf(keys(palette.background)),
  fontColor: oneOf(keys(palette).filter((key) => typeof key === 'string')),
  size: oneOf(keys(sizes)),
};

Button.defaultProps = {
  bgColor: 'transparent',
  fontColor: 'blue',
  size: 'normal',
};
