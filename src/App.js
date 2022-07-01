import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Category from './pages/category/Category'
import Booking from './pages/booking/Booking'
import Stores from './pages/store/Stores'
import Team from './pages/team/Team'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp';
import Error from './pages/Error'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


function App() {
    
  return (
    <div className="container-xxl bg-light p-0">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stores/" element={<Stores />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/category" element={<Category />} />
        <Route path="/team" element={<Team />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Routes> 
      <Footer />
    </div>
  )
}

export default App