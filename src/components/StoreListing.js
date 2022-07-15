import React from 'react'
import useFireStore from '../components/useFireStore'

const StoreListing = () => {
    const { docs } = useFireStore()
    return (
    
                <div className="container mb-5">
                    <div className="row g-0 gx-5 align-items-center">
                        <div className="col-lg-12">
                            <div className="text-center mb-5 wow slideInLeft" data-wow-delay="0.1s">
                                <h1 className="mb-3">Store Listing</h1>
                                <p>Book a store of your choice or browse for more store to fine your match!</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                {/* Query data from the data base and loop it  */}
                        
                                {docs && docs.map(doc => (
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={doc.id} >
                                        <div className="property-item rounded overflow-hidden">
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
                                    </div>
                                ))}
                                <h3 className="">No stores available at the moment</h3>
                            
                                <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                    <a className="btn btn-dark py-3 px-5 mb-5" href="/stores">Browse More Stores</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
  )
}

export default StoreListing
