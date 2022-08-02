import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

// import reportWebVitals from './reportWebVitals';

const reactContentContainer = document.querySelector("#root");
const root = createRoot(reactContentContainer); // createRoot(container!) if you use TypeScript

root.render(<App tab="home" />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
