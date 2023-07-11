import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './Register';
import Login from './Login';
import Protected from './Protected';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<Protected />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

