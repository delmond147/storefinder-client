import React from 'react'
import { FiSend } from 'react-icons/fi'
// import { GrSend } from 'react-icons/gr'

export default function Header() {
    return (
        <>
            {/* <!-- Search Start --> */}
            <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: '35px' }}>
                <div className="container">
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-4">
                                    <input type="text" className="form-control border-0 py-2" placeholder="Search Keyword" />
                                </div>
                                <div className="col-md-4">
                                    <select defaultValue="" className="form-select border-0 py-2">
                                        <option value="">Search by Category</option>
                                        <option value="1">SUPER MARKET</option>
                                        <option value="2">BARBAR SHOP</option>
                                        <option value="3">GROCERY STORE</option>
                                        <option value="4">FASHION STORE</option>
                                        <option value="5">PATROL STATION</option>
                                        <option value="6">OFFICE</option>
                                        <option value="7">PHARMACY</option>

                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select defaultValue="" className="form-select border-0 py-2">
                                        <option value="" >Search by Location</option>
                                        <option value="1">Bamenda</option>
                                        <option value="2">Yaounde</option>
                                        <option value="3">Douala</option>
                                        <option value="4">Garoua</option>
                                        <option value="5">Betuoa</option>
                                        <option value="6">Maroua</option>
                                        <option value="7">South West</option>
                                        <option value="8">Baffoussam</option>
                                        <option value="3">Ebolowa</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <a href="/booking" className="btn btn-secondary "><FiSend /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Search End --> */}

        </>
    )
}
