import React from 'react';
import PropTypes from 'prop-types';

const ContentContainer = ({ className }) => {
  return <div className={className} />;
};

export default ContentContainer;

ContentContainer.propTypes = {
  className: PropTypes.string
};

ContentContainer.defaultProps = {
  className: null
};
