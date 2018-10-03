// Core modules
import React from 'react';
import ReactDOM from 'react-dom';
// Css
import './style/style.css';
// React components
import Root from './Root';
import App from './components/app';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);
