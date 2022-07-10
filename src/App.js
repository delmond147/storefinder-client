import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Booking from './pages/booking/Booking'
import Stores from './pages/store/Stores'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Error from './pages/Error'
import { Routes, Route } from 'react-router-dom'
import { UserAuthContextProvider } from './context/UserAuthContext'
import ProtectedRoutes from './ProtectedRoutes'

function App() { 
  return (
    <div className="container-xxl bg-light p-0">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route element={<ProtectedRoutes />}>
            <Route path="stores" element={<Stores />} />
            <Route path="booking" element={<Booking />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  )
}

export default App