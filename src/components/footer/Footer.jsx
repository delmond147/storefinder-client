import React from 'react'

export default function Footer() {
    const styles = {
        mwidth: { width: '400px' }
    }
  return (
    <div className="container-xxl bg-white p-0">
      {/* Footer Start */}
      <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href="#home"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href="#home"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href="#home"><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href="#home"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <a className="btn btn-link text-white-50" href="#home">About Us</a>
                        <a className="btn btn-link text-white-50" href="#home">Contact Us</a>
                        <a className="btn btn-link text-white-50" href="#home">Our Services</a>
                        <a className="btn btn-link text-white-50" href="#home">Privacy Policy</a>
                        <a className="btn btn-link text-white-50" href="#home">Terms & Condition</a>
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
                        <div className="position-relative mx-auto" style={styles.mwidth}>
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
                            &copy; <a className="border-bottom" href="#home">Your Site Name</a>, All Right Reserved. 
							
							{/* This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
							Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="#home">Home</a>
                                <a href="#home">Cookies</a>
                                <a href="#home">Help</a>
                                <a href="#home">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer End */}


        {/* Back to Top */}
        <a href="#home" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>

    </div>
  )
}
