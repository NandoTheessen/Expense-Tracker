import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components';
import registerServiceWorker from './registerServiceWorker';
import ContentContainer from './View/Components/Content-Container';
import Button from './View/Components/Button';
import { mainBG, mainAC } from './utils/colors';

const Body = styled.div`
  background: ${mainBG};
  color: ${mainAC};
  text-align: center;
  padding-top: 50px;
`;

const App = function App() {
  return (
    <Body>
      <ContentContainer className="container-left" />
      <ContentContainer className="container-right" />
      <Button text="AWESOME" onClick={() => alert('uhoooooh')} />
    </Body>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
