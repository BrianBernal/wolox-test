//  libraries
import React from 'react';
import PropTypes from 'prop-types';

// styles
import StyledTitle from './styles';

export default function Typography({
  variant, weight, fontStyle, color, children,
}) {
  return (
    <StyledTitle as={variant} weight={weight} color={color} fontStyle={fontStyle}>
      {children}
    </StyledTitle>
  );
}

Typography.propTypes = {
  variant: PropTypes.string,
  weight: PropTypes.string,
  fontStyle: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Typography.defaultProps = {
  variant: 'p',
  weight: undefined,
  fontStyle: undefined,
  color: undefined,
};
