import React from 'react'
// import {Link} from 'react-router-dom'
export default function Footer() {

  return (

    <>
        {/* Footer Start */}
        <div className="container-fluid bg-dark text-white-50 footer mt-4 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        <p className="mb-2 text-white"><i className="fa fa-map-marker-alt me-3"></i>348 Bonaberi, Douala, Cameroon</p>
                        <a href="Tel:+237680749528" className="mb-2 text-white"><i className="fa fa-phone-alt me-3"></i>+237680749528</a>
                        <a href="mailto:dnyingchuo@gmail.com" className="mb-2 text-white"><i className="fa fa-envelope me-3"></i>dnyingchuo@gmail.com</a>
                        <div className="d-flex pt-2">
                            <a className="btn btn-secondary btn-social" href="#home"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-secondary btn-social" href="#home"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-secondary btn-social" href="#home"><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-secondary btn-social" href="#home"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <a className="btn btn-link text-white-50" href="/about">About Us</a>
                        <a className="btn btn-link text-white-50" href="/booking">Booking</a>
                        <a className="btn btn-link text-white-50" href="/stores">Stores</a>
                        <a className="btn btn-link text-white-50" href="/team">Our Team</a>
                        <a className="btn btn-link text-white-50" href="/category">Category</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Store Gallery</h5>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="store/store2.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="store/store4.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="store/store1.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="store/store3.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="store/store6.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="store/store5.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Newsletter</h5>
                        <p className="text-white">Sign up to get the leatest trends and post from our platform.</p>
                        <div className="position-relative mx-auto" style={{maxWidth: '400px'}}>
                            <input className="text-white-50 form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <a href="email" type="button" className="btn btn-secondary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="text-md-center mb-0">
                            <div className="text-center">
                                &copy; Copyright  <a className="text-primary" href="/">Finder</a> All Right Reserved.
                            </div> 
							
							{/* This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
							<div className="text-center">
                                Designed By <a className="text-primary" href="/dgitech">Dgitech</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer End */}

        {/* Back to Top */}
        {/* <Link to="/" className="btn btn-lg btn-secondary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></Link> */}

    </>
  )
}
