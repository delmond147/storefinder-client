import React, {  } from 'react'
// import axios from 'axios';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';

export default function Stores() {
    // const [name, setName] = useState('')
    // const [category, setCategory] = useState('')
    // const [amount, setAmount] = useState('')
    // const [description, setDescription] = useState('')
    // const [purpose, setPurpose] = useState('')
    // const [area, setArea] = useState('')
    // const [location, setLocation] = useState('')
    // const [image, setImage] = useState('')
    
    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/admin/store/').then((res) => {
    //         console.log(res.data)
    //     })
    // }, []);
    return (
        <>
            <Nav />
            {/* <!-- Carousel Start --> */}
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{maxHeight: '300px'}}>
                            <img className="w-100" src="finder/carousel-1.jpeg" alt="" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="" style={{maxWidth: '700px'}}>
                                    <h6 className="section-title text-white text-uppercase mb-2 animated slideInDown">Online Store Rental Platform</h6>
                                    <h1 className="text-white mb-4 animated slideInDown">View amongst our listed items</h1>
                                    <a href="/about" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Rent Store</a>
                                    <a href="/about" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Buy a Store</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{maxHeight: '300px'}}>
                            <img className="w-100" src="finder/carousel-2.jpeg" alt="" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="" style={{maxWidth: '700px'}}>
                                    <h6 className="section-title text-white text-uppercase mb-2 animated slideInDown">Online Store Rental Platform</h6>
                                    <h1 className="text-white mb-4 animated slideInDown">We are happy to see your here!</h1>
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


            {/* Team Start */}
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
                                            <a href="/booking" className="btn btn-primary py-3 px-5 ">Rent</a>  
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
            <Footer />
        </>
    )
}
