import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Example1 from './Examples/Example1';
import Example2 from './Examples/Example2';
import Example3 from './Examples/Example3';
import Example4 from './Examples/Example4';
import Example5 from './Examples/Example5';
import Example6 from './Examples/Example6';
import Example7 from './Examples/Example7';
import SundaeScreen from './Examples/pages/SundaeScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Example1 name="React Developers" /> */}
    {/* <Example2 /> */}
    {/* <Example3 /> */}
    {/* <Example4 /> */}
    {/* <Example5 /> */}
    {/* <Example6 /> */}
    {/* <Example7>Testing </Example7> */}
    <SundaeScreen />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
