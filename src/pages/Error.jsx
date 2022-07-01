import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
    return (
        <>
            <div className="conatainer-xxl error-wrapper stars bg-dark">
                <div className="pt-5 mb-0">
                    <h1 className="error text-secondary ">404</h1>
                    <h3 className="error-oop text-light">Oops!!!</h3>
                    <p className="text-light error-text">Hmm looks like that page doesn't exist!</p>
                </div>
                <div className="d-block text-center my-4 ">
                    <Link to="/" className="btn btn-primary">Go Back to Home</Link>
                </div>
            </div>

        </>
    )
}
