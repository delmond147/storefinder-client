import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-white-50 footer mt-4 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="text-primary mb-4">Get In Touch</h5>
              <p className="mb-2 text-white">
                <i className="fa fa-map-marker text-secondary me-3"></i>348
                Bonaberi, Douala, Cameroon
              </p>
              <Link to="Tel:+237680749528" className="mb-2 text-white">
                <i className="fa fa-phone text-secondary me-3"></i>+237680749528
              </Link>
              <br />
              <Link
                to="mailto:dnyingchuo@gmail.com"
                className="mb-2 text-white"
              >
                <i className="fa fa-envelope text-secondary me-3"></i>
                dnyingchuo@gmail.com
              </Link>

              <div className="d-flex pt-2">
                <Link className="btn btn-secondary btn-social" to="#home">
                  <i className="fab fa-twitter"></i>
                </Link>

                <Link className="btn btn-secondary btn-social" to="#home">
                  <i className="fab fa-facebook-f"></i>
                </Link>

                <Link className="btn btn-secondary btn-social" to="#home">
                  <i className="fab fa-youtube"></i>
                </Link>

                <Link className="btn btn-secondary btn-social" to="#home">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-4">Quick Links</h5>
              <Link className="btn btn-link text-white-50" to="/about">
                About Us
              </Link>

              <Link className="btn btn-link text-white-50" to="/booking">
                Booking
              </Link>
              <Link className="btn btn-link text-white-50" to="/stores">
                Stores
              </Link>
              <Link className="btn btn-link text-white-50" to="/team">
                Our Team
              </Link>
            </div>

            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-4">Newsletter</h5>
              <p className="text-white">
                Sign up to get the leatest trends and post from our platform.
              </p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="text-white-50 form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <Link
                  to="email"
                  type="button"
                  className="btn btn-secondary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="text-md-center mb-0">
                <div className="text-center">
                  &copy; Copyright{" "}
                  <Link className="text-primary" to="/">
                    Finder
                  </Link>{" "}
                  All Right Reserved.
                </div>

                {/* This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
                <div className="text-center">
                  Designed By{" "}
                  <Link className="text-primary" to="/dgitech">
                    Dgitech
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
}
