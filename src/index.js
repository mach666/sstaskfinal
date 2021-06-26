import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//ReactDOM.render(
 // <React.StrictMode>
 //   <App  />
 // </React.StrictMode>,
 // document.getElementById('root')
//);

function tick() {
  ReactDOM.render(
    <App date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
reportWebVitals();
