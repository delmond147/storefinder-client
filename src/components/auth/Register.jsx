import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form,  Alert } from "react-bootstrap";
import { useUserAuth } from "../../context/UserAuthContext";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
        await signUp(email, password);
        navigate("/login");
        } catch (err) {
        setError(err.message);
        }
    };

    return (
        <>
            <div className="container col-lg-4 col-md-6 col-sm-7 pt-2 card">
                <div className="d-flex justify-content-center align-items-center">
                    <img src="images/avatar-150.png" className="rounded-circle" alt="" />
                </div>
                <h3 className="mb-3 text-center">Register on Finder✌️</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                <div class="container form-floating mb-4">
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

                <div class="col-12 mt-4 d-flex justify-content-center align-items-center">
                    <button type="submit" class="btn btn-primary px-5 py-3 ">
                    Login
                    </button>
                </div>
                </Form>

                <div className="mt-2 p-4 box text-center">
                Don't have an account? <Link to="/login">Login</Link>
                </div>
            </div>
        </>
    );
};

export default Register;
