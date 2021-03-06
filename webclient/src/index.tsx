import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import './lang/i18n';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
