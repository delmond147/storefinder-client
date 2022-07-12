import React, { useState } from 'react'
import {Alert} from 'react-bootstrap'

export default function SearchBar() {
    const [purpose, setPurpose] = useState("")
    const [category, setCategory] = useState("")
    const [location, setLocation] = useState("")
    const [error, setError] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")

    }
    return (
        <>
            {/* <!-- Search Start --> */}
            <div className="container-fluid bg-dark mb-3 wow fadeIn" data-wow-delay="0.1s" style={{ padding: '35px' }}>
                <div className="container">
                    <div className="row">
                        <h3 className="mb-3 text-center">{error && <Alert variant="danger">{ error}</Alert>}</h3>
                        <div className="col-md-12 col-12">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-2 ">
                                    <div className="col-md-3">
                                        <input type="text" className="form-control border-0 py-3" placeholder="rent or buy" value={purpose} onChange={(e) => setPurpose(e.target.value)} />
                                    </div>
                                    <div className="col-md-4">
                                        <input className="form-control border-0 py-3" placeholder="store, office, supermarket, etc" value={category} onChange={(e) => setCategory(e.target.value)} />
                                    </div>
                                    <div className="col-md-3">
                                        <input className="form-control border-0 py-3" placeholder="city" value={location} onChange={(e) => setLocation(e.target.value)} />
                                    </div>
                                    <div className="col-2">
                                        <input type="submit" className="btn btn-dark px-5 py-3 col-lg-12 col-sm-12" value="search" />
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
