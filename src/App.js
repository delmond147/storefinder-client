import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Category from './pages/category/Category'
import Booking from './pages/booking/Booking'
import Stores from './pages/store/Stores'
import Team from './pages/team/Team'
import SignIn from './components/signin/SignIn'
import SignUp from './components/signup/SignUp';
import Error from './pages/Error'
import { Routes, Route } from 'react-router-dom';

function App() {
    
  return (
    <div className="container-xxl bg-white p-0">
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
    </div>
  )
}

export default App