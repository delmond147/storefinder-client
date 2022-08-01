import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Navbar from './components/navbar/Navbar'
import Store from './components/Store'
import AddStore from './components/AddStore'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Checkout from './components/Checkout'
import StoreList from './pages/store/StoreList'
import Contact from './pages/contact/Contact'
import Error from './pages/Error'
import { Routes, Route } from 'react-router-dom'
import { UserAuthContextProvider } from './context/UserAuthContext'
import Footer from './components/footer/Footer'
// import ProtectedRoutes from './ProtectedRoutes'


function App() {
  return (
    <div className="container-xxl bg-light p-0">
      <UserAuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="checkout" element={<Checkout />} />
          <Route path="store/:id" element={<Store />} />
          <Route path="stores" element={<StoreList />} />
          <Route path="add" element={<AddStore />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </UserAuthContextProvider>
    </div>
  )
}

export default App