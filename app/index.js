import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = function App() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
