import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

// import reportWebVitals from './reportWebVitals';

const reactContentRoot = document.querySelector("#root");

ReactDOM.render(<App />, reactContentRoot);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
