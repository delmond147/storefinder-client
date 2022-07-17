import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import {auth} from "../../firebase";
import { toast } from 'react-toastify'

const Register = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            updateProfile(auth.currentUser, {displayName: name})
            navigate("/signin")
        } catch (error) {
        toast(error.code, { type: "error"})
        }
    }

    return (
        <>
            <div className="container bg-dark col-lg-4 col-md-6 col-sm-7 pt-3 card mt-5">
                {/* <div className="d-flex justify-content-center align-items-center mb-4">
                    <img src="images/avatar-150.png" className="rounded-circle" alt="" />
                </div> */}
                
                <div className="d-flex justify-content-center align-items-center pt-4 mb-4 ">
                    <Link to="/" className="navbar-brand" >
                        <i className="fa fa-home me-1"></i>
                    </Link>
                    <h3 className="text-center text-light">Register on Finder✌️</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                        />
                        <label for="floatingInput">Username</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="col-12 mt-5 d-flex justify-content-center align-items-center">
                        <button type="submit" class="btn btn-primary px-5 py-3 ">
                            Register
                        </button>
                    </div>
                </form>

                <div className="mt-2 p-4 box text-center">
                    Don't have an account? <Link to="/signin">Login</Link>
                </div>
            </div>
        </>
    );
};

export default Register;
