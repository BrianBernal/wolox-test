//  libraries
import React from 'react';
import PropTypes from 'prop-types';

// styles
import ContainerSection from './styles';

export default function WrapperSection({ children, className, variant }) {
  return (
    <ContainerSection className={className} as={variant}>
      {children}
    </ContainerSection>
  );
}

WrapperSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
};

WrapperSection.defaultProps = {
  className: null,
  variant: 'section',
};
