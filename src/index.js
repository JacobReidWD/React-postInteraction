import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import reportWebVitals from './reportWebVitals';
import Buttons from './buttons';
import reactDom from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <Post />
  </React.StrictMode>,
  document.getElementById('root')
);
reactDom.render(
  <React.StrictMode>
    <Buttons />
  </React.StrictMode>,
  document.getElementById('btns')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
