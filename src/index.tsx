import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Task } from './components/Task';
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='login' element={<LogIn></LogIn>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

