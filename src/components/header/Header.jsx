import React from 'react'
// import { FiSend } from 'react-icons/fi'
// import { GrSend } from 'react-icons/gr'


export default function Header() {

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('pull data from firebase database')
    }
    return (
        <>
            {/* <!-- Search Start --> */}
            <div className="container-fluid bg-primary mb-3 wow fadeIn" data-wow-delay="0.1s" style={{ padding: '35px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-2 ">
                                    <div className="col-md-3">
                                        <input type="text" className="form-control border-0 py-3 text-center" placeholder="Search Keyword [rent or buy]" />
                                    </div>
                                    <div className="col-md-4">
                                        <input className="form-control border-0 py-3 text-center" placeholder="Category [store, office, supermarket]" />
                                    </div>
                                    <div className="col-md-3">
                                        <input className="form-control border-0 py-3 text-center" placeholder="Location [city]" />
                                    </div>
                                    <div className="col-2">
                                        <input type="submit" className="btn btn-dark px-5 py-3" value="find" />
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
