import React from 'react';
import PropTypes from 'prop-types';

const ContentContainer = ({ className }) => {
  return <div className={className} />;
};

ContentContainer.propTypes = {
  className: PropTypes.string
};

ContentContainer.defaultProps = {
  className: null
};

export default ContentContainer;
