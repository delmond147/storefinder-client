import React from 'react'
// import { FiSend } from 'react-icons/fi'
// import { GrSend } from 'react-icons/gr'


export default function Header() {
    return (
        <>
            {/* <!-- Search Start --> */}
            <div className="container-fluid bg-primary mb-3 wow fadeIn" data-wow-delay="0.1s" style={{ padding: '35px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <form>
                                <div className="row g-2 ">
                                    <div className="col-md-3">
                                        <input type="text" className="form-control border-0 py-3 text-center" placeholder="rent or buy" />
                                    </div>
                                    <div className="col-md-4">
                                        <input className="form-control border-0 py-3 text-center" placeholder="store, office, supermarket, etc" />
                                    </div>
                                    <div className="col-md-3">
                                        <input className="form-control border-0 py-3 text-center" placeholder="city" />
                                    </div>
                                    <div className="col-2">
                                        <input type="submit" className="btn btn-dark px-5 py-3" value="search" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* <!-- Search End --> */}

        </>
    )
}
