//  libraries
import React from 'react';
import PropTypes from 'prop-types';

// styles
import ContainerDiv from './styles';

export default function MaxDivWrapperDiv({ children, className, variant = 'section' }) {
  return (
    <ContainerDiv className={className} as={variant}>
      {children}
    </ContainerDiv>
  );
}

MaxDivWrapperDiv.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
};

MaxDivWrapperDiv.defaultProps = {
  className: null,
  variant: 'section',
};
