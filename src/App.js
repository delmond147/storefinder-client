import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Booking from './pages/booking/Booking'
import Stores from './pages/store/Stores'
import Login from './components/auth/Login'
import Register from './components/auth/Register';
import Error from './pages/Error'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { UserAuthContextProvider } from './context/UserAuthContext'


function App() {
    
  return (
    <div className="container-xxl bg-light p-0">
      <UserAuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </UserAuthContextProvider>
    </div>
  )
}

export default App