import React from 'react'

export default function Navbar() {
    const styles = {
        size: { 
            width: { width: '3rem'},
            height: { height: '3rem'}
        }
    }
  return (
    <>
        {/* Spinner Start */}
        <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style={styles.size} role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        {/* Spinner End */}


        {/* Topbar Start */}
        <div class="container-fluid bg-light p-0">
            <div class="row gx-0 d-none d-lg-flex">
                <div class="col-lg-7 px-5 text-start">
                    <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                        <small class="fa fa-map-marker-alt text-primary me-2"></small>
                        <small>123 Street, New York, USA</small>
                    </div>
                    <div class="h-100 d-inline-flex align-items-center py-3">
                        <small class="far fa-clock text-primary me-2"></small>
                        <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                    </div>
                </div>
                <div class="col-lg-5 px-5 text-end">
                    <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                        <small class="fa fa-phone-alt text-primary me-2"></small>
                        <small>+237680749528</small>
                    </div>
                    <div class="h-100 d-inline-flex align-items-center">
                        <a class="btn btn-sm-square bg-white text-primary me-1" href="home"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-sm-square bg-white text-primary me-1" href="home"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-sm-square bg-white text-primary me-1" href="home"><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-sm-square bg-white text-primary me-0" href="home"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
        {/* Topbar End */}


        {/* Navbar Start */}
        <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 class="m-0 text-primary"><i class="fa fa-car me-3"></i>CarServ</h2>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="index.html" class="nav-item nav-link active">Home</a>
                    <a href="about.html" class="nav-item nav-link">About</a>
                    <a href="service.html" class="nav-item nav-link">Services</a>
                    <div class="nav-item dropdown">
                        <a href="#home" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu fade-up m-0">
                            <a href="booking.html" class="dropdown-item">Booking</a>
                            <a href="team.html" class="dropdown-item">Technicians</a>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            <a href="404.html" class="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <a href="contact.html" class="nav-item nav-link">Contact</a>
                </div>
                <a href="home" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote<i class="fa fa-arrow-right ms-3"></i></a>
            </div>
        </nav>
    {/* Navbar End */}


        {/* Carousel Start */}
        <div class="container-fluid p-0 mb-5">
            <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="w-100" src="/img/carousel-bg-1.jpg" alt="" />
                        <div class="carousel-caption d-flex align-items-center">
                            <div class="container">
                                <div class="row align-items-center justify-content-center justify-content-lg-start">
                                    <div class="col-10 col-lg-7 text-center text-lg-start">
                                        <h6 class="text-white text-uppercase mb-3 animated slideInDown"> Car Servicing </h6>
                                        <h1 class="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Repair Service Center</h1>
                                        <a href="home" class="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i class="fa fa-arrow-right ms-3"></i></a>
                                    </div>
                                    <div class="col-lg-5 d-none d-lg-flex animated zoomIn">
                                        <img class="img-fluid" src="/img/carousel-1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="w-100" src="img/carousel-bg-2.jpg" alt="" />
                        <div class="carousel-caption d-flex align-items-center">
                            <div class="container">
                                <div class="row align-items-center justify-content-center justify-content-lg-start">
                                    <div class="col-10 col-lg-7 text-center text-lg-start">
                                        <h6 class="text-white text-uppercase mb-3 animated slideInDown"> Car Servicing </h6>
                                        <h1 class="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Wash Service Center</h1>
                                        <a href="home" class="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i class="fa fa-arrow-right ms-3"></i></a>
                                    </div>
                                    <div class="col-lg-5 d-none d-lg-flex animated zoomIn">
                                        <img class="img-fluid" src="img/carousel-2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        {/* Carousel End */}


    </>
  )
}
