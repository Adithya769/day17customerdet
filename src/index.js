import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import SettingData from './component/details';
import Game from './component/mygame';
// import Clockapp from './component/lifecycle/lifecycle';
// import Calculator from './component/Temperature/calculator';
// import Gamelist from './component/mygamelist';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SettingData /> */}
    <Game />
    {/* <Clockapp /> */}
    {/* <Calculator />
    <Gamelist /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
