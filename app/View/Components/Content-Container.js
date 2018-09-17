import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  --primary-accent: #ffffff;
  background: var(--secondary-bg, black);
  color: var(--primary-accent);
`;

export default class ContentContainer extends Component {
  render() {
    return (
      <Container
        Style={{ background: '#ffffff' }}
        data-testid="content-container"
      >
        <h1>Hello World!</h1>
      </Container>
    );
  }
}
