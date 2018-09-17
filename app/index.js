import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import registerServiceWorker from './registerServiceWorker';
import ContentContainer from './View/Components/Content-Container';
import Button from './View/Components/Button';

const Body = styled.div`
  height: 100vh;
  text-align: center;
  --primary-bg: #050609;
  --secondary-bg: #161821;
  --primary-accent: #ff087f;
  --secondary-accent: #0ad3ff;
  --main-BA: '#153b50';
  background: var(--primary-bg);
  color: var(--secondary--accent);
`;

const App = function App() {
  return (
    <Body>
      <ContentContainer heading="Hello World!" />
      <ContentContainer heading="Hello World!" />
      <Button text="AWESOME" onClick={() => alert('uhoooooh')} />
    </Body>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
