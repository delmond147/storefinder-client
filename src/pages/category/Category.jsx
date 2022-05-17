import React from 'react'

export default function Category() {
    const styles = {
        mwidth: { width: '600px'}
    }
  return (
    <div className="container-xxl bg-white p-0">
      {/* Category Start */}
      <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={styles.mwidth}>
                    <h1 className="mb-3">Property Types</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="#home">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="img/icon-apartment.png" alt="Icon" />
                                </div>
                                <h6>Apartment</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="#home">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="img/icon-villa.png" alt="Icon" />
                                </div>
                                <h6>Villa</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="#home">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="img/icon-house.png" alt="Icon" />
                                </div>
                                <h6>Home</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="#home">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="img/icon-housing.png" alt="Icon" />
                                </div>
                                <h6>Office</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="#home">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="img/icon-building.png" alt="Icon" />
                                </div>
                                <h6>Building</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="#home">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="img/icon-neighborhood.png" alt="Icon" />
                                </div>
                                <h6>Townhouse</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="#home">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="img/icon-condominium.png" alt="Icon" />
                                </div>
                                <h6>Shop</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="#home">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="img/icon-luxury.png" alt="Icon" />
                                </div>
                                <h6>Garage</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Category End */}
    </div>
  )
}
