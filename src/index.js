import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { injectGlobal } from 'styled-components';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    
    font-family: 'Open Sans', sans-serif;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
