import React from 'react'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'


export default function Category() {
    return (
        <>
            <Nav />
            {/* <!-- Carousel Start --> */}
            <div className="container-fluid p-0 mb-5">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{maxHeight: '300px'}}>
                            <img className="w-100" src="img/carousel-1.jpg" alt="" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth: '700px'}}>
                                    <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Online Store Rental Platform</h6>
                                    <h1 className="display-3 text-white mb-4 animated slideInDown">Welcome to the About Us Page</h1>
                                    <a href="/about" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Rent Store</a>
                                    <a href="/about" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Buy a Store</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{maxHeight: '300px'}}>
                            <img className="w-100" src="img/carousel-2.jpg" alt="" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth: '700px'}}>
                                    <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Online Store Rental Platform</h6>
                                    <h1 className="display-3 text-white mb-4 animated slideInDown">Welcome to the About Us page</h1>
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
            
            {/* Category Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                        <h1 className="mb-3">Store Categories</h1>
                        <p>Select a category to see more information about that particular category and also see the number of items available in that category</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="/stores">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-apartment.png" alt="Icon" />
                                    </div>
                                    <h6>SUPER MARKETS</h6>
                                    <span>3 ITEMS</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="/stores">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-villa.png" alt="Icon" />
                                    </div>
                                    <h6>GROCERY STORE</h6>
                                    <span>2 ITEMS</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="/stores">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-house.png" alt="Icon" />
                                    </div>
                                    <h6>BOOK STORE</h6>
                                    <span>5 ITEMS</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="/stores">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-housing.png" alt="Icon" />
                                    </div>
                                    <h6>FASION STORES</h6>
                                    <span>6 ITEMS</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="/stores">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-building.png" alt="Icon" />
                                    </div>
                                    <h6>GROCERY STORE</h6>
                                    <span>123 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="/stores">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-neighborhood.png" alt="Icon" />
                                    </div>
                                    <h6>OFFICES</h6>
                                    <span>12 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="/stores">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-condominium.png" alt="Icon" />
                                    </div>
                                    <h6>PHARMACY</h6>
                                    <span>4 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="/stores">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-luxury.png" alt="Icon" />
                                    </div>
                                    <h6>SALONE</h6>
                                    <span>8 Properties</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Category End */}
            <Footer />
        </>
    )
}
