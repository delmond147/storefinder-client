import React, {  } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import useFireStore from '../../components/useFireStore'
import { Alert } from 'react-bootstrap'

export default function Stores() {

    const { docs } = useFireStore('stores')

    return (
        <>
            <Navbar />
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-0 gx-5 align-items-end">
                        <div className="col-lg-6">
                            <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                                <h1 className="mb-3">Store Listing</h1>
                                <p>Book a store of your choice or browse for more stores to fine your match!</p>
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

                    {/* Query data from the data base and loop it  */}
                    
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" >
                                    {docs ? docs.map(doc => (
                                        <div className="property-item rounded overflow-hidden" key={doc.id}>
                                            <div className="position-relative overflow-hidden">
                                                <img className="img-fluid" src="store/store1.jpg" alt="" />
                                                <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{doc.purpose}</div>
                                                <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{doc.category}</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-dark mb-3">{doc.amount}FCFA</h5>
                                                <a className="d-block h5 mb-2" href="/booking">{doc.title}</a>
                                                <p><i className="fa fa-map-marker-alt text-dark me-2"></i>{doc.location}</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-dark me-2"></i>{doc.size}Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-dark me-2"></i>rooms</small>
                                                <a href="/booking" className="btn btn-dark py-3 px-5">Rent</a>  
                                            </div>
                                        </div>
                                    )) : <Alert variant="danger">No store available at this moment.</Alert>}
                                </div>

                                
                                <h3 className="">No stores available at the moment</h3>
                            
                                <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                    <a className="btn btn-dark py-3 px-5" href="/stores">Browse More Stores</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
