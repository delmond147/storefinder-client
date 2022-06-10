import React from 'react'
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';

export default function About() {
    return (
        <>
            <Nav />
            
            {/* <!-- Carousel Start --> */}
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide " data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active bg-dark" style={{maxHeight: '300px'}}>
                            <img className="w-100" src="finder/bam-main.webp" alt="" style={{objectFit: 'cover'}} />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="" style={{maxWidth: '700px'}}>
                                    <h6 className="section-title text-white text-uppercase mb-2 animated slideInDown">Online Store Rental Platform</h6>
                                    <h1 className="text-white mb-4 animated slideInDown">Welcome to know more About Us</h1>
                                    <a href="/about" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Rent Store</a>
                                    <a href="/about" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Buy a Store</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{maxHeight: '300px'}}>
                            <img className="w-100" src="finder/bam-main.webp" alt="" style={{objectFit: 'cover'}} />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="" style={{maxWidth: '700px'}}>
                                    <h6 className="section-title text-white text-uppercase mb-2 animated slideInDown">Online Store Rental Platform</h6>
                                    <h1 className="text-white mb-4 animated slideInDown">Finder is out to promote you businesses</h1>
                                    <a href="/about" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Rent Store</a>
                                    <a href="/about" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Buy a Store</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <!-- Carousel End --> */}

            {/* About Start */}
            <div className="container-xxl service py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="mb-5">Explore more about Us</h1>
                    </div>
                    <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="col-lg-4">
                            <div className="nav w-100 nav-pills me-4">
                                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                                    <i className="fa fa-car-side fa-2x me-3"></i>
                                    <h4 className="m-0">Who are We?</h4>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                                    <i className="fa fa-car fa-2x me-3"></i>
                                    <h4 className="m-0">Our Services</h4>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                                    <i className="fa fa-cog fa-2x me-3"></i>
                                    <h4 className="m-0">Our Mission</h4>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                                    <i className="fa fa-oil-can fa-2x me-3"></i>
                                    <h4 className="m-0">Our Partners</h4>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content w-100">
                                <div className="tab-pane fade show active" id="tab-pane-1">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{maxHeight: '350px'}}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute img-fluid w-100 h-100" src="img/service-1.jpg"
                                                    style={{objectFit: 'cover'}} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                            <a href="/about" className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-2">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{minHeight: '350px'}}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute img-fluid w-100 h-100" src="img/service-2.jpg"
                                                    style={{objectFit: 'cover'}} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                            <a href="/about" className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-3">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{minHeight: '350px'}}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute img-fluid w-100 h-100" src="img/service-3.jpg"
                                                    style={{objectFit: 'cover'}} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                            <a href="/about" className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-4">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{minHeight: '350px'}}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute img-fluid w-100 h-100" src="img/service-4.jpg"
                                                    style={{objectFit: 'cover'}} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                            <a href="/about" className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    

            {/* About End */}
            <Footer />

        </>
    )
}
