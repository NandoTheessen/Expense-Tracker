import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, text, onClick }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: '',
  className: '',
  onClick: null,
};

export default Button;
