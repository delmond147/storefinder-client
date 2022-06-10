import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            {/* Topbar Start */}
            <div className="container-fluid bg-light p-0">
                <div className="row gx-0 d-none d-lg-flex ">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-map-marker-alt text-primary me-2"></small>
                            <small>438 Bonaberi, Douala, Cameroon</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-3">
                            <small className="far fa-clock text-primary me-2"></small>
                            <small>online 24/7</small>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-phone-alt text-primary me-2"></small>
                            <small>+237680749528</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <a className="btn btn-sm-square bg-white text-primary me-1" href="#home"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-sm-square bg-white text-primary me-1" href="#home"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-sm-square bg-white text-primary me-1" href="#home"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-sm-square bg-white text-primary me-0" href="#home"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}


            {/* <!-- Navbar Start --> */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
                <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary"><i className="fa fa-home me-1"></i>FINDER</h2>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        
                        <div className="nav-item dropdown">
                            <Link to="/stores" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Stores</Link>
                            <div className="dropdown-menu fade-up m-0">
                                <Link to="/stores" className="dropdown-item">Stores</Link>
                                <Link to="/booking" className="dropdown-item">Booking</Link>
                                <Link to="category" className="dropdown-item">Categories</Link>
                                <a href="http://127.0.0.1:8000/admin/store" className="bg-dark btn btn-primary dropdown-item">Add Store<i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        
                    </div>
                    <Link to="/signin" className="btn btn-primary py-3 px-lg-3 d-none d-lg-block">Sign In<i className="fa fa-arrow-right ms-3"></i></Link>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}

           {/* Carousel Start */}
            <div className="container-fluid p-0 mb-0 carousel-container" data-wow-delay="0.5s">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{maxHeight: '500px'}}>
                            <img src="finder/mfound-yaounde.webp" alt="" className="w-100" />
                            <div className="carousel-caption d-flex align-items-center" >
                                <div className="container align-items-center">
                                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                                        <div className="col-10 col-lg-7 text-center text-lg-start resize">
                                            <h6 className="text-light mb-2 animated slideInDown">Online Rental Platform</h6>
                                            <h1 className="text-light mb-3 animated slideInDown">Rent yout store online</h1>
                                            <Link to="/about" className="btn btn-primary py-2 px-4 animated slideInDown">Learn More</Link>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                            <img className="img-fluid" src="finder/carousel-4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" style={{maxHeight: '500px'}}>
                            <img src="finder/mfound-yaounde.webp" alt="" className="w-100" />
                            <div className="carousel-caption d-flex align-items-center">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                                        <div className="col-10 col-lg-7 text-center text-lg-start">
                                            <h6 className="text-light mb-2 animated slideInDown">Online Rental Platform</h6>
                                            <h1 className="text-light mb-3 animated slideInDown">Pay your Store Online</h1>
                                            <a href="/about-us" className="btn btn-primary py-2 px-4 animated slideInDown">Learn More</a>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                            <img className="img-fluid" src="finder/mokolo-yaounde.webp" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" style={{maxHeight: '500px'}}>
                            <img src="finder/mfound-yaounde.webp" alt="" className="w-100" />
                            <div className="carousel-caption d-flex align-items">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                                        <div className="col-10 col-lg-7 text-center text-lg-start">
                                            <h6 className="text-light mb-2 animated slideInDown">Online Rental Platform</h6>
                                            <h1 className="text-light mb-3 animated slideInDown">Get a store at your convenience</h1>
                                            <a href="/about-us" className="btn btn-primary py-2 px-4 animated slideInDown">Learn More</a>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                            <img className="img-fluid" src="finder/baffousame.webp" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* Carousel End */}

        </>
    )
}
