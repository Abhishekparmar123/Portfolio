import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import 'bulma/css/bulma.min.css';
import './index.css';

import routes from './routes.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={routes[0].path} />} />
        {
          routes.map((route, index) =>{
            return <Route path={ "/" + route.path } element={ route.component } key={index + route.name}/>
          })
        }
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
