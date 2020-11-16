//  libraries
import React from 'react';
import PropTypes from 'prop-types';

// styles
import ContainerDiv from './styles';

export default function MaxDivWrapperDiv({ children, className }) {
  return (
    <ContainerDiv className={className}>
      {children}
    </ContainerDiv>
  );
}

MaxDivWrapperDiv.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

MaxDivWrapperDiv.defaultProps = {
  className: null,
};
