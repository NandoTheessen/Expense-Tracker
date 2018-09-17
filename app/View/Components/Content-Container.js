import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: var(--secondary-bg, black);
  color: var(--primary-accent);
`;

const ContentContainer = ({ heading }) => {
  return (
    <Container data-testid="content-container">
      <h1>{heading}</h1>
    </Container>
  );
};

export default ContentContainer;
