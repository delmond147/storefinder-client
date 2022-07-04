import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            {/* Topbar Start */}
            <div className="container-fluid bg-dark p-0">
                <div className="row gx-0 d-none d-lg-flex ">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-map-marker-alt text-secondary me-2"></small>
                            <small className="text-light">438 Bonaberi, Douala, Cameroon</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-3">
                            <small className="far fa-clock text-secondary me-2"></small>
                            <small className="text-light">online 24/7</small>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-phone-alt text-secondary me-2"></small>
                            <small className="text-light">+237680749528</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <a className="btn btn-sm-square bg-white text-secondary me-1" href="#home"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-sm-square bg-white text-secondary me-1" href="#home"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-sm-square bg-white text-secondary me-1" href="#home"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-sm-square bg-white text-secondary me-0" href="#home"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}


            {/* <!-- Navbar Start --> */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5 hov">
                    <h2 className="m-0 text-dark hov"><i className="fa fa-home me-1"></i>FINDER</h2>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 ">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        
                        <div className="nav-item dropdown">
                            <Link to="/stores" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Stores</Link>
                            <div className="dropdown-menu fade-up m-0">
                                <Link to="/stores" className="dropdown-item">Stores</Link>
                                <Link to="/booking" className="dropdown-item">Booking</Link>
                                <Link to="http://127.0.0.1:8000/admin/store" className="dropdown-item">Add Store</Link>
                            </div>
                        </div>

                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        
                    </div>
                    <div className="d-lg-flex">
                        <Link to="/signin" className="nav-item btn btn-dark d-flex py-3 px-lg-4 p-4 m-3">Login</Link>
                        <Link to="/signup" className="nav-item btn btn-dark d-flex py-3 px-lg-3 p-4 m-3">Register</Link>
                    </div>
                    
                </div>
            </nav>
            {/* <!-- Navbar End --> */}
        </>
    )
}

