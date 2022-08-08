import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { getDocs } from 'firebase/firestore'

export default function SearchBar() {
    const [category, setCategory] = useState("")
    const [location, setLocation] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await getDocs()
            navigate('/results')
        } catch (err) {
            setError(err.message)
        }

    }
    return (
        <>
            {/* <!-- Search Start --> */}
            <div className="container-xxl bg-dark mb-3 wow fadeIn" data-wow-delay="0.1s" style={{ padding: '35px' }}>
                <div className="container">
                    <div className="row">
                        <p className="mb-3 text-center">{error && <Alert variant="danger" dismissible onClose={() => setError("")}>{error}</Alert>}</p>
                        <div className="col-md-12">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-2 ">
                                    <div className="col-md-5">
                                        <input className="form-control border-0 py-3" placeholder="Category (Office, Supermarket) etc." value={category} onChange={(e) => setCategory(e.target.value)} />
                                    </div>
                                    <div className="col-md-5">
                                        <input className="form-control border-0 py-3" placeholder="City" value={location} onChange={(e) => setLocation(e.target.value)} />
                                    </div>
                                    <div className="col-md-2">
                                        <button type="submit" className="btn btn-dark py-3 "><i className="fa fa-search me-3"></i></button>
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
