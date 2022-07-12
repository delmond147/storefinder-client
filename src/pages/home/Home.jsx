import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import SearchBar from '../../components/header/SearchBar'
import Category from '../category/Category'
import Team from '../team/Team'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <Carousel />
            <SearchBar />
            <Category />

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
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" >
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid" src="store/store1.jpg" alt="" />
                                            <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                            <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-dark mb-3">350000FCFA</h5>
                                            <a className="d-block h5 mb-2" href="payment">Office For Rent</a>
                                            <p><i className="fa fa-map-marker-alt text-dark me-2"></i>374 Street, Bonaberi, Douala</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-dark me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-dark me-2"></i>5 rooms</small>
                                            <a href="payment" className="btn btn-dark py-3 px-5">Rent</a>  
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid" src="store/store2.jpg" alt="" />
                                            <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                            <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Pharmacy</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-dark mb-3">150000FCFA</h5>
                                            <a className="d-block h5 mb-2" href="payment">Pharmacy for Rent</a>
                                            <p><i className="fa fa-map-marker-alt text-dark me-2"></i>827 Street, Akwa, Douala</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-dark me-2"></i>800 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-dark me-2"></i>3 rooms</small>
                                            <a href="payment" className="btn btn-dark py-3 px-5">Rent</a>  
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid" src="store/store3.jpg" alt="" />
                                            <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                            <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Super Market</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-dark mb-3">5000000FCFA</h5>
                                            <a className="d-block h5 mb-2" href="payment">Super Market For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-dark me-2"></i>615 Street, Bonanjo, Douala</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-dark me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-dark me-2"></i>4 sections</small>
                                            <a href="payment" className="btn btn-dark py-3 px-5">Buy</a>  
                                        </div>
                                    </div>
                                </div>



                                
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid" src="store/store4.jpg" alt="" />
                                            <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                            <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Patrol Station</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-dark mb-3">3500000FACA</h5>
                                            <a className="d-block h5 mb-2" href="payment">BOCOM Patrol Station For Sell</a>
                                            <p><i className="fa fa-map-marker-alt text-dark me-2"></i>330 Street, Bonassama, Douala</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-dark me-2"></i>2000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-dark me-2"></i>3 sections</small>
                                            <a href="payment" className="btn btn-dark py-3 px-5">Buy</a>  
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid" src="store/store5.jpg" alt="" />
                                            <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                            <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Grocery Store</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-dark mb-3">120000FCFA</h5>
                                            <a className="d-block h5 mb-2" href="payment">Grocery Store For Rent</a>
                                            <p><i className="fa fa-map-marker-alt text-dark me-2"></i>719 Street, Commercial Avenuue, Bamenda</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-dark me-2"></i>300 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-dark me-2"></i>no rooms</small>
                                            <a href="payment" className="btn btn-dark py-3 px-5">Rent</a>  
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid" src="store/store6.jpg" alt="" />
                                            <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                            <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Barbing Salone</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-dark mb-3">100000FCFA</h5>
                                            <a className="d-block h5 mb-2" href="payment">Barbing Salone For Rent</a>
                                            <p><i className="fa fa-map-marker-alt text-dark me-2"></i>496 Street, Bastos, Yaounde</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-dark me-2"></i>1000 Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-dark me-2"></i>3 Bed</small>
                                            <a href="payment" className="btn btn-dark py-3 px-5">Rent</a>  
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                    <a className="btn btn-dark py-3 px-5" href="/stores">Browse More Stores</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Property List End --> */}

            <Team />
            <Footer />
        
        </>
    )
}
