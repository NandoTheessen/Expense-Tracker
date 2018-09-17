import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContentContainer extends Component {
  render() {
    const { className } = this.props;
    const classNames = 'contentContainer ' + className;
    return (
      <div className={classNames} data-testid="content-container">
        <h1>Hello World!</h1>
      </div>
    );
  }
}

ContentContainer.propTypes = {
  className: PropTypes.string
};

ContentContainer.defaultProps = {
  className: null
};
