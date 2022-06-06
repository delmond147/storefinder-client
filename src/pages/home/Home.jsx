import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
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

            {/* <!-- Property List Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-0 gx-5 align-items-end">
                        <div className="col-lg-6">
                            <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                                <h1 className="mb-3">Store Listing</h1>
                                <p>Book a store of your choice or browse for more store to fine your match!</p>
                            </div>
                        </div>
                        <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                                <li className="nav-item me-2">
                                    <a className="btn btn-outline-primary active" data-bs-toggle="pill" href="/category">Featured</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="btn btn-outline-primary" data-bs-toggle="pill" href="/sale">For Sell</a>
                                </li>
                                <li className="nav-item me-0">
                                    <a className="btn btn-outline-primary" data-bs-toggle="pill" href="/rent">For Rent</a>
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
                                            <img className="img-fluid" src="img/property-1.jpg" alt="" />
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">350000FCFA</h5>
                                            <a className="d-block h5 mb-2" href="/booking">Office For Rent</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>374 Street, Bonaberi, Douala</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>5 rooms</small>
                                            <a href="/booking" className="btn btn-primary py-3 px-5">Rent</a>  
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid" src="img/property-2.jpg" alt="" />
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Pharmacy</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">150000FCFA</h5>
                                            <a className="d-block h5 mb-2" href="/booking">Pharmacy for Rent</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>827 Street, Akwa, Douala</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>800 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 rooms</small>
                                            <a href="/booking" className="btn btn-primary py-3 px-5">Rent</a>  
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid" src="img/property-3.jpg" alt="" />
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Super Market</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">5000000FCFA</h5>
                                            <a className="d-block h5 mb-2" href="/booking">Super Market For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>615 Street, Bonanjo, Douala</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>4 sections</small>
                                            <a href="/booking" className="btn btn-primary py-3 px-5">Buy</a>  
                                        </div>
                                    </div>
                                </div>



                                
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid" src="img/property-4.jpg" alt="" />
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Patrol Station</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">3500000FACA</h5>
                                            <a className="d-block h5 mb-2" href="/booking">BOCOM Patrol Station For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>330 Street, Bonassama, Douala</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>2000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 sections</small>
                                            <a href="/booking" className="btn btn-primary py-3 px-5">Buy</a>  
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid" src="img/property-5.jpg" alt="" />
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Grocery Store</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">120000FCFA</h5>
                                            <a className="d-block h5 mb-2" href="/booking">Grocery Store For Rent</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>719 Street, Commercial Avenuue, Bamenda</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>300 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>no rooms</small>
                                            <a href="/booking" className="btn btn-primary py-3 px-5">Rent</a>  
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid" src="img/property-6.jpg" alt="" />
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Barbing Salone</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">100000FCFA</h5>
                                            <a className="d-block h5 mb-2" href="/booking">Barbing Salone For Rent</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>496 Street, Bastos, Yaounde</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                            <a href="/booking" className="btn btn-primary py-3 px-5">Rent</a>  
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                    <a className="btn btn-primary py-3 px-5" href="/stores">Browse More Stores</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Property List End --> */}

            {/* Team Start */}
            <div className="container-xxl py-5">
                <div className="container py-5">
                    <div className="text-center wow fadeInUp mb-5" data-wow-delay="0.1s">
                        <h1 className="mb-3">Our Team</h1>
                        <p>Meet our partners and team members with the most prominent stores for you</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="img/team-6.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Tufoin Carissa</h5>
                                <p>CFO at "FINDER"</p>
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
                                    <img className="img-fluid" src="img/team-5.png" alt="" />
                                </div>
                                <h5 className="mb-0">Delmond Bongha</h5>
                                <p>CEO & Founder at "FINDER"</p>
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
                                    <img className="img-fluid" src="img/team-3.jpg" alt="" />
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
            <Footer />
        </>
    )
}
