import React from 'react'

export default function Navbar() {
  return (
        <>
            {/* Topbar Start */}
            <div className="container-fluid bg-light p-0">
                <div className="row gx-0 d-none d-lg-flex">
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
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary"><i className="fa fa-home me-1"></i>FINDER</h2>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="booking.html" className="nav-item nav-link">Booking</a>
                        <div className="nav-item dropdown">
                            <a href="#home" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Stores</a>
                            <div className="dropdown-menu fade-up m-0">
                                <a href="booking.html" className="dropdown-item">Booking</a>
                                <a href="team.html" className="dropdown-item">Technicians</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                        
                    </div>
                    <a href="#home" className="nav-item nav-link btn btn-primary py-3 px-lg-3 d-none d-lg-block">Sign In<i className="fa fa-arrow-right ms-3"></i></a>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}

           {/* Carousel Start */}
            <div className="container-fluid p-0 mb-0" data-wow-delay="0.5s">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{maxHeight: '500px', background: 'rgba(0, 0, 0, 09)'}}>
                            <img src="finder/carousel-1.jpeg" alt="" className="w-100" />
                            <div className="carousel-caption d-flex align-items-center">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                                        <div className="col-10 col-lg-7 text-center text-lg-start">
                                            <h6 className="text-light text-uppercase mb-3 animated slideInDown">Online Rental Platform</h6>
                                            <h1 className="display-3 text-light mb-4 pb-3 animated slideInDown">Rent a Store for your business</h1>
                                            <a href="#home" className="btn btn-primary py-3 px-5 animated slideInDown">Learn More</a>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                            <img className="img-fluid" src="finder/carousel-4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" style={{maxHeight: '500px'}}>
                            <img src="finder/carousel-2.jpeg" alt="" className="w-100" />
                            <div className="carousel-caption d-flex align-items-center">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                                        <div className="col-10 col-lg-7 text-center text-lg-start">
                                            <h6 className="text-light text-uppercase mb-3 animated slideInDown">Online Rental Platform</h6>
                                            <h1 className="display-3 text-light mb-4 pb-3 animated slideInDown">Pay for your Online</h1>
                                            <a href="#home" className="btn btn-primary py-3 px-5 animated slideInDown">Learn More</a>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                            <img className="img-fluid" src="finder/carousel-5.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" style={{maxHeight: '500px'}}>
                            <img src="finder/carousel-6.jpg" alt="" className="w-100" />
                            <div className="carousel-caption d-flex align-items">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                                        <div className="col-10 col-lg-7 text-center text-lg-start">
                                            <h6 className="text-light text-uppercase mb-3 animated slideInDown">Online Rental Platform</h6>
                                            <h1 className="display-3 text-light mb-4 pb-3 animated slideInDown">Pay for your Online</h1>
                                            <a href="#home" className="btn btn-primary py-3 px-5 animated slideInDown">Learn More</a>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                            <img className="img-fluid" src="img/delmond.png" alt="" />
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
