import React from "react"

const Entry = () => {
    return (
        <div className="container-xxl bg-white p-0">
            {/* <!-- Spinner Start --> */}
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{width:'3rem', height:'3rem'}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            {/* <!-- Spinner End --> */}


            {/* <!-- Navbar Start --> */}
            <div className="container-fluid nav-bar bg-transparent">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                    <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
                        <div className="icon p-2 me-2">
                            <img className="img-fluid" src="img/icon-deal.png" alt="Icon" style={{width: '30px', height: '30px'}} />
                        </div>
                        <h1 className="m-0 text-primary">Makaan</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <div className="nav-item dropdown">
                                <a href="#index" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="property-list.html" className="dropdown-item">Property List</a>
                                    <a href="property-type.html" className="dropdown-item">Property Type</a>
                                    <a href="property-agent.html" className="dropdown-item">Property Agent</a>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#index" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="404.html" className="dropdown-item">404 Error</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <a href="#index" className="btn btn-primary px-3 d-none d-lg-flex">Add Property</a>
                    </div>
                </nav>
            </div>
            {/* <!-- Navbar End --> */}


            {/* <!-- Header Start --> */}
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5">
                        <h1 className="display-5 animated fadeIn mb-4">Find A <span className="text-primary">Perfect Home</span> To Live With Your Family</h1>
                        <p className="animated fadeIn mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet
                            sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                        <a href="#index" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
                    </div>
                    <div className="col-md-6 animated fadeIn">
                        <div className="owl-carousel header-carousel">
                            <div className="owl-carousel-item">
                                <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
                            </div>
                            <div className="owl-carousel-item">
                                <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Header End --> */}


            {/* <!-- Search Start --> */}
            <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: '35px'}}>
                <div className="container">
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-4">
                                    <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword" />
                                </div>
                                <div className="col-md-4">
                                    <select defaultValue="" className="form-select border-0 py-3">
                                        <option value="">Property Type</option>
                                        <option value="1">Property Type 1</option>
                                        <option value="2">Property Type 2</option>
                                        <option value="3">Property Type 3</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select defaultValue="" className="form-select border-0 py-3">
                                        <option value="">Location</option>
                                        <option value="1">Location 1</option>
                                        <option value="2">Location 2</option>
                                        <option value="3">Location 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-dark border-0 w-100 py-3">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Search End --> */}


            {/* <!-- Category Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                        <h1 className="mb-3">Property Types</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="#index">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-apartment.png" alt="" />
                                    </div>
                                    <h6>Apartment</h6>
                                    <span>123 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="#index">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-villa.png" alt="" />
                                    </div>
                                    <h6>Villa</h6>
                                    <span>123 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="#index">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-house.png" alt="" />
                                    </div>
                                    <h6>Home</h6>
                                    <span>123 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="#index">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-housing.png" alt="" />
                                    </div>
                                    <h6>Office</h6>
                                    <span>123 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="#index">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-building.png" alt="" />
                                    </div>
                                    <h6>Building</h6>
                                    <span>123 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="#index">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-neighborhood.png" alt="" />
                                    </div>
                                    <h6>Townhouse</h6>
                                    <span>123 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="#index">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-condominium.png" alt="" />
                                    </div>
                                    <h6>Shop</h6>
                                    <span>123 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="#index">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-luxury.png" alt="" />
                                    </div>
                                    <h6>Garage</h6>
                                    <span>123 Properties</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Category End --> */}


            {/* <!-- About Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                <img className="img-fluid w-100" src="img/about.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
                            <a className="btn btn-primary py-3 px-5 mt-3" href="#index">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}


            {/* <!-- Property List Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-0 gx-5 align-items-end">
                        <div className="col-lg-6">
                            <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                                <h1 className="mb-3">Property Listing</h1>
                                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                                <li className="nav-item me-2">
                                    <a className="btn btn-outline-primary active" data-bs-toggle="pill" href="#tab-1">Featured</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-2">For Sell</a>
                                </li>
                                <li className="nav-item me-0">
                                    <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-3">For Rent</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#index"><img className="img-fluid" src="img/property-1.jpg" alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="#index">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#index"><img className="img-fluid" src="img/property-2.jpg" alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="#index">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#index"><img className="img-fluid" src="img/property-3.jpg" alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="#index">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#index"><img className="img-fluid" src="img/property-4.jpg" alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="#index">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#index"><img className="img-fluid" src="img/property-5.jpg" alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="#index">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#index"><img className="img-fluid" src="img/property-6.jpg" alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="#index">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                    <a className="btn btn-primary py-3 px-5" href="#index">Browse More Property</a>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#index"><img className="img-fluid" src="img/property-1.jpg" alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="#index">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#index"><img className="img-fluid" src="img/property-2.jpg" alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="#index">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#index"><img className="img-fluid" src="img/property-3.jpg" alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="#index">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#index"><img className="img-fluid" src="img/property-4.jpg" alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="#index">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#index"><img className="img-fluid" src="img/property-5.jpg" alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="#index">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#index"><img className="img-fluid" src="img/property-6.jpg" alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="#index">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <a className="btn btn-primary py-3 px-5" href="#index">Browse More Property</a>
                                </div>
                            </div>
                        </div>
                        <div id="tab-3" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#index"><img className="img-fluid" src="img/property-1.jpg" alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="#index">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#index"><img className="img-fluid" src="img/property-2.jpg" alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="#index">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#index"><img className="img-fluid" src="img/property-3.jpg" alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="#index">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#index"><img className="img-fluid" src="img/property-4.jpg" alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="#index">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#index"><img className="img-fluid" src="img/property-5.jpg" alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="#index">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#index"><img className="img-fluid" src="img/property-6.jpg" alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">$12,345</h5>
                                            <a className="d-block h5 mb-2" href="#index">Golden Urban House For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <a className="btn btn-primary py-3 px-5" href="#index">Browse More Property</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Property List End --> */}


            {/* <!-- Call to Action Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="bg-light rounded p-3">
                        <div className="bg-white rounded p-4" style={{border: '1px dashed rgba(0, 185, 142, .3)'}}>
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                    <img className="img-fluid rounded w-100" src="img/call-to-action.jpg" alt="" />
                                </div>
                                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="mb-4">
                                        <h1 className="mb-3">Contact With Our Certified Agent</h1>
                                        <p>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
                                    </div>
                                    <a href="#index" className="btn btn-primary py-3 px-4 me-2"><i className="fa fa-phone-alt me-2"></i>Make A Call</a>
                                    <a href="#index" className="btn btn-dark py-3 px-4"><i className="fa fa-calendar-alt me-2"></i>Get Appoinment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Call to Action End --> */}


            {/* <!-- Team Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                        <h1 className="mb-3">Property Agents</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/team-1.jpg" alt="" />
                                    <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                        <a className="btn btn-square mx-1" href="#index"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square mx-1" href="#index"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square mx-1" href="#index"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4 mt-3">
                                    <h5 className="fw-bold mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/team-2.jpg" alt="" />
                                    <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                        <a className="btn btn-square mx-1" href="#index"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square mx-1" href="#index"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square mx-1" href="#index"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4 mt-3">
                                    <h5 className="fw-bold mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/team-3.jpg" alt="" />
                                    <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                        <a className="btn btn-square mx-1" href="#index"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square mx-1" href="#index"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square mx-1" href="#index"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4 mt-3">
                                    <h5 className="fw-bold mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/team-4.jpg" alt="" />
                                    <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                        <a className="btn btn-square mx-1" href="#index"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square mx-1" href="#index"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square mx-1" href="#index"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4 mt-3">
                                    <h5 className="fw-bold mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}


            {/* <!-- Testimonial Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                        <h1 className="mb-3">Our Clients Say!</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div className="testimonial-item bg-light rounded p-3">
                            <div className="bg-white border rounded p-4">
                                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" style={{width: '45px', height: '45px'}} alt="" />
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-light rounded p-3">
                            <div className="bg-white border rounded p-4">
                                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-2.jpg" style={{width: '45px', height: '45px'}} alt="" />
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-light rounded p-3">
                            <div className="bg-white border rounded p-4">
                                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-3.jpg" style={{width: '45px', height: '45px'}} alt="" />
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}
            

            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Get In Touch</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href="#index"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-social" href="#index"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-social" href="#index"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-outline-light btn-social" href="#index"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Quick Links</h5>
                            <a className="btn btn-link text-white-50" href="#index">About Us</a>
                            <a className="btn btn-link text-white-50" href="#index">Contact Us</a>
                            <a className="btn btn-link text-white-50" href="#index">Our Services</a>
                            <a className="btn btn-link text-white-50" href="#index">Privacy Policy</a>
                            <a className="btn btn-link text-white-50" href="#index">Terms & Condition</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Photo Gallery</h5>
                            <div className="row g-2 pt-2">
                                <div className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src="img/property-1.jpg" alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src="img/property-2.jpg" alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src="img/property-3.jpg" alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src="img/property-4.jpg" alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src="img/property-5.jpg" alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src="img/property-6.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Newsletter</h5>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative mx-auto" style={{maxWidth: '400px'}}>
                                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a className="border-bottom" href="#index">Your Site Name</a>, All Right Reserved. 
                                
                                {/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/}
                                Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <a href="#index">Home</a>
                                    <a href="#index">Cookies</a>
                                    <a href="#index">Help</a>
                                    <a href="#index">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}


            {/* <!-- Back to Top --> */}
            <a href="#h" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    )
}

export default Entry;