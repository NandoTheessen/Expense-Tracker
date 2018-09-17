import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 4em;
  width: 400px;
`;

const Button = ({ text, onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  text: null,
  onClick: null
};

export default Button;
