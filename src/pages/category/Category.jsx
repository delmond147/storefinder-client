import React from 'react'


export default function Category() {
    // const [count, setCount] = useState(0)
    return (
        <>
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
                                    <h6 className="text-dark">SUPER MARKETS</h6>
                                    <span className="text-dark">3 ITEMS</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="/stores">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-villa.png" alt="Icon" />
                                    </div>
                                    <h6 className="text-dark">GROCERY STORE</h6>
                                    <span className="text-dark">2 ITEMS</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="/stores">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-house.png" alt="Icon" />
                                    </div>
                                    <h6 className="text-dark">BOOK STORE</h6>
                                    <span className="text-dark">5 ITEMS</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="/stores">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-housing.png" alt="Icon" />
                                    </div>
                                    <h6 className="text-dark">FASION STORES</h6>
                                    <span className="text-dark">6 ITEMS</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="/stores">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-building.png" alt="Icon" />
                                    </div>
                                    <h6 className="text-dark">GROCERY STORE</h6>
                                    <span className="text-dark">123 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="/stores">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-neighborhood.png" alt="Icon" />
                                    </div>
                                    <h6 className="text-dark">OFFICES</h6>
                                    <span className="text-dark">12 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="/stores">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-condominium.png" alt="Icon" />
                                    </div>
                                    <h6 className="text-dark">PHARMACY</h6>
                                    <span className="text-dark">4 Properties</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="/stores">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src="img/icon-luxury.png" alt="Icon" />
                                    </div>
                                    <h6 className="text-dark">SALONE</h6>
                                    <span className="text-dark">8 Properties</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Category End */}
        </>
    )
}
