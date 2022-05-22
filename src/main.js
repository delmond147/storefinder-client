import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="stores" element={<Stores />} />
            <Route path="booking" element={<Booking />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="finde/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
