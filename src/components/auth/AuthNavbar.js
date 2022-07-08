import React from 'react'
import  { Link } from 'react-router-dom'

function AuthNavbar() {
    return (
            <nav className="navbar navbar-expand-lg sticky-top">
                <Link to="/" className="navbar-brand"><i className="bi bi-arrow-left"></i></Link>
            </nav>
    )
}

export default AuthNavbar