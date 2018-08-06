import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { injectGlobal } from 'styled-components';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
