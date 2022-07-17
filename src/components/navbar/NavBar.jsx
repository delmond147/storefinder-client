import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

const NavBar = () => {
  const [user] = useAuthState(auth);
  return (
      <>
      <Link
        to="/"
        className="navbar-brand d-flex align-items-center px-4 "
      >
        <h2 className="m-0">
          <i className="fa fa-home me-1"></i>FINDER
        </h2>
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 ">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link">
            About
          </Link>

          <div className="nav-item dropdown">
            <Link
              to="/stores"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Stores
            </Link>
            <div className="dropdown-menu fade-up m-0">
              <Link to="/stores" className="dropdown-item">
                Stores
              </Link>
              <Link to="/booking" className="dropdown-item">
                Booking
              </Link>
              <Link to="/add" className="dropdown-item">
                Add Store
              </Link>
            </div>
          </div>

          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>

        <div className="">
          <span className="pe-4">
            Welcome, {user.displayName}
          </span>
          <button className=" nav-item btn btn-dark py-3 px-lg-3" onClick={() => signOut()}>Logout</button>
        </div>
        </div>
      </>
      )
}

      export default NavBar