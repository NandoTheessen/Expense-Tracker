import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ContentContainer from './View/Components/Content-Container';

const App = function App() {
  return (
    <div>
      <ContentContainer className="container-left" />
      <ContentContainer className="container-right" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
