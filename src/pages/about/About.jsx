import React from "react";

export default function About() {
  return (
    <>
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-5">About Us</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-3">
              <div className="nav w-100 nav-pills me-4">
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-1"
                  type="button"
                >
                  <i className="fa fa-car fa-2x me-3"></i>
                  <h4 className="m-0">Who are We?</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-2"
                  type="button"
                >
                  <i className="fa fa-car fa-2x me-3"></i>
                  <h4 className="m-0">Our Services</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-3"
                  type="button"
                >
                  <i className="fa fa-cog fa-2x me-3"></i>
                  <h4 className="m-0">Our Mission</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-4"
                  type="button"
                >
                  <i className="fa fa-group fa-2x me-3"></i>
                  <h4 className="m-0">Our Team</h4>
                </button>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="tab-content w-100">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ maxHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="finder/bg-7.jpeg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">
                        Finder is an online rental platform
                      </h3>
                      <p className="mb-4">
                        "FINDER" is an online store rental marketplace aimed at
                        reducing the stress involved in vacancy store search, by
                        connecting Store Owners or managers with Business Owners
                        or buyers. "FINDER" is designed to serve Cameroon as a
                        whole and is mainly to be used by Store Owners, and
                        Store rental agents/agencies, wishing to lease or sell a
                        Store to connect to thousands of prospective Business
                        Owners and buyers.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Online
                        Rental Services
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Easy
                        store searching
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Modern
                        Stores and busines structures
                      </p>
                      <a
                        href="/stores"
                        className="btn btn-primary py-3 px-5 mt-3"
                      >
                        Rent store<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* about our Services */}
                <div className="tab-pane fade" id="tab-pane-2">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="finder/bg-6.jpeg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Online store rental service</h3>
                      <p className="mb-4">
                        Fine and rent or buy a store for your new or existing
                        business.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Provide
                        store searching and rental
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Register business structures online
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        connecting you with store owners
                      </p>
                      <a
                        href="/stores"
                        className="btn btn-primary py-3 px-5 mt-3"
                      >
                        Rent store<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* about our Mission */}
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="finder/bg-2.jpeg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Easy store/shop rental online</h3>
                      <p className="mb-4">
                        Our mission is to drive business growth by providing and
                        easy way to conviniently rent or buy a store of your
                        choice at the comfort of your home.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Quality
                        stores/shops
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Amazing
                        agents
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Modern
                        Equipment
                      </p>
                      <a
                        href="/stores"
                        className="btn btn-primary py-3 px-5 mt-3"
                      >
                        Rent store<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* about our team */}
                <div className="tab-pane fade" id="tab-pane-4">
                  <div className="row g-4">
                    <div className="col-md-12">
                      <div class="container">
                        <div
                          class="text-center wow fadeInUp"
                          data-wow-delay="0.1s"
                        >
                          <h1 class="mb-5">Our Expert Team Members</h1>
                        </div>
                        <div class="row g-4">
                          <div
                            class="col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay="0.3s"
                          >
                            <div class="team-item p-4">
                              <div class="overflow-hidden mb-4">
                                <img
                                  class="img-fluid"
                                  src="img/team-5.png"
                                  alt=""
                                />
                              </div>
                              <h5 class="mb-0">Delmond Bongha</h5>
                              <p>CEO & Founder</p>
                              <div class="btn-slide mt-1">
                                <i class="fa fa-share"></i>
                                <span>
                                  <a href="/team">
                                    <i class="fab fa-facebook-f"></i>
                                  </a>
                                  <a href="/team">
                                    <i class="fab fa-twitter"></i>
                                  </a>
                                  <a href="/team">
                                    <i class="fab fa-instagram"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            class="col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay="0.5s"
                          >
                            <div class="team-item p-4">
                              <div class="overflow-hidden mb-4">
                                <img
                                  class="img-fluid"
                                  src="img/team-6.jpg"
                                  alt=""
                                />
                              </div>
                              <h5 class="mb-0">Tufoin Carissa</h5>
                              <p>CFO</p>
                              <div class="btn-slide mt-1">
                                <i class="fa fa-share"></i>
                                <span>
                                  <a href="/team">
                                    <i class="fab fa-facebook-f"></i>
                                  </a>
                                  <a href="/team">
                                    <i class="fab fa-twitter"></i>
                                  </a>
                                  <a href="/team">
                                    <i class="fab fa-instagram"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div
                            class="col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay="0.9s"
                          >
                            <div class="team-item p-4">
                              <div class="overflow-hidden mb-4">
                                <img
                                  class="img-fluid"
                                  src="img/team-4.jpg"
                                  alt=""
                                />
                              </div>
                              <h5 class="mb-0">Fonki Britney</h5>
                              <p>COO</p>
                              <div class="btn-slide mt-1">
                                <i class="fa fa-share"></i>
                                <span>
                                  <a href="/team">
                                    <i class="fab fa-facebook-f"></i>
                                  </a>
                                  <a href="/team">
                                    <i class="fab fa-twitter"></i>
                                  </a>
                                  <a href="/team">
                                    <i class="fab fa-instagram"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
