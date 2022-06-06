import React from 'react'
import Nav from '../../components/nav/Nav'

export default function Team() {
    return (
        <>
            <Nav />
            {/* <!-- Carousel Start --> */}
            <div className="container-fluid p-0 mb-3">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{maxHeight: '300px'}}>
                            <img className="w-100" src="img/carousel-1.jpg" alt="" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth: '700px'}}>
                                    <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Online Store Rental Platform</h6>
                                    <h1 className="display-3 text-white mb-4 animated slideInDown">Meet with our Amazing Team</h1>
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
                                    <h1 className="display-3 text-white mb-4 animated slideInDown">We are bended to give you just the best</h1>
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

            {/* Team Start */}
            <div className="container-xxl py-5">
                <div className="container py-5">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="mb-3">Our Team</h1>
                        <p classaName="mb-3">Meet our partners and team members with the most prominent stores for you</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="img/team-1.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Full Name</h5>
                                <p>Designation</p>
                                <div className="btn-slide mt-1">
                                    <i className="fa fa-share"></i>
                                    <span>
                                        <a href="/team"><i className="fab fa-facebook-f"></i></a>
                                        <a href="/team"><i className="fab fa-twitter"></i></a>
                                        <a href="/team"><i className="fab fa-instagram"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="img/team-6.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Tufoin Carissa</h5>
                                <p>CFO at "FINDER"</p>
                                <div className="btn-slide mt-1" >
                                    <i className="fa fa-share"></i>
                                    <span>
                                        <a href="/team"><i className="fab fa-facebook-f"></i></a>
                                        <a href="/team"><i className="fab fa-twitter"></i></a>
                                        <a href="/team"><i className="fab fa-instagram"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="img/team-5.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Delmond Bongha</h5>
                                <p>Designation</p>
                                <div className="btn-slide mt-1" >
                                    <i className="fa fa-share"></i>
                                    <span>
                                        <a href="/team"><i className="fab fa-facebook-f"></i></a>
                                        <a href="/team"><i className="fab fa-twitter"></i></a>
                                        <a href="/team"><i className="fab fa-instagram"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="img/team-4.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Full Name</h5>
                                <p>Designation</p>
                                <div className="btn-slide mt-1" >
                                    <i className="fa fa-share"></i>
                                    <span>
                                        <a href="/team"><i className="fab fa-facebook-f"></i></a>
                                        <a href="/team"><i className="fab fa-twitter"></i></a>
                                        <a href="/team"><i className="fab fa-instagram"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}

        </>
    )
}
