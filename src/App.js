import React from 'react'
import Header from './components/header/Header'
// import routes from './routes'
// import {Link } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import Category from './pages/category/Category'
import Property from './pages/property/Property'
import Team from './pages/team/Team'
import Testimonials from './pages/testimonial/Testimonials'
// import Entry from './Entry'
// import Intro from './Intro'
function App() {
    
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      <Header />
      <About />
      <Category />
      <Property />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App