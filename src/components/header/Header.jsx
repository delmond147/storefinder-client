import React from 'react'

export default function Header() {
  return (
    <>  
        {/* <!-- Search Start --> */}
        <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: '35px'}}>
            <div className="container">
                <div className="row g-2">
                    <div className="col-md-10">
                        <div className="row g-2">
                            <div className="col-md-4">
                                <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword" />
                            </div>
                            <div className="col-md-4">
                                <select defaultValue="" className="form-select border-0 py-3">
                                    <option value="">Search by Category</option>
                                    <option value="1">Super Market</option>
                                    <option value="2">Barber Shop</option>
                                    <option value="3">Grocery Store</option>
                                    <option value="4">Fashion Store</option>
                                    <option value="3">Patrol Station</option>

                                </select>
                            </div>
                            <div className="col-md-4">
                                <select defaultValue="" className="form-select border-0 py-3">
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
                        <button className="btn btn-dark border-0 w-100 py-3">Search<i className="bi bi-search-send"></i></button>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Search End --> */}

    </>
  )
}
