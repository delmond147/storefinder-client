import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Booking from './pages/booking/Booking'
import AddStore from './components/AddStore'
import StoreList from './pages/store/StoreList'
import Contact from './pages/contact/Contact'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Error from './pages/Error'
import { Routes, Route } from 'react-router-dom'
import { UserAuthContextProvider } from './context/UserAuthContext'
// import ProtectedRoutes from './ProtectedRoutes'


function App() { 
  return (
    <div className="container-xxl bg-light p-0">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="add" element={<AddStore />} />
          {/* <Route element={<ProtectedRoutes />}></Route> */}
          <Route path="stores" element={<StoreList />} />
          <Route path="booking" element={<Booking />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  )
}

export default App