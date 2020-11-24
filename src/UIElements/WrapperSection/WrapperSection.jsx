//  libraries
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// styles
import ContainerSection from './styles';

const WrapperSection = forwardRef(({
  children, className, variant, id,
}, ref) => (
  <ContainerSection className={className} as={variant} ref={ref} id={id}>
    {children}
  </ContainerSection>
));

export default WrapperSection;

WrapperSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
  id: PropTypes.string,
};

WrapperSection.defaultProps = {
  variant: 'section',
  className: null,
  id: null,
};
