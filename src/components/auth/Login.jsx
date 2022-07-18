import React, { useState } from "react"
import {auth} from '../../firebase'
import {toast} from 'react-toastify'
import { Link, useNavigate } from "react-router-dom"
import {useUserAuth} from '../../context/UserAuthContext'
import {signInWithEmailAndPassword} from 'firebase/auth'
import GoogleButton from "react-google-button"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {googleSignIn} = useUserAuth()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    } catch (error) {
      toast(error.code, {type: "error"})
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    
    try {
      await googleSignIn()
      navigate("/")
    } catch (error) {
      toast(error.code, { type: "error"})
    }
  }

  return (
    <>
      <div className="container bg-dark col-lg-4 col-md-6 col-sm-7 pt-2 mt-5 card">
        {/* <div className="d-flex justify-content-center align-items-center mb-3">
          <img src="images/avatar-150.png" className="rounded-circle" alt="" />
        </div> */}
        <div className="d-flex justify-content-center align-items-center mb-4 mt-4">
          <Link to="/" className="navbar-brand" >
            <i className="fa fa-home me-1"></i>
          </Link>
          <h3 className="text-center text-light">Login to Finder✌️</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-4">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="col-12 mt-4 d-flex justify-content-center align-items-center">
            <button type="submit" class="btn btn-primary px-5 py-3 ">
              Login
            </button>
          </div>
        </form>

        <hr />

        <div className="mt-4 col-12 d-flex justify-content-center align-items-center">
          <GoogleButton className="g-btn" onClick={handleGoogleSignIn} />
        </div>

        <div className="mt-3 p-4 box text-center">
          Don't have and account yet? <Link to="/signup">Register</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
