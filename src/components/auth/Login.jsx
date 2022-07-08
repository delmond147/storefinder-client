import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import GoogleButton from "react-google-button";
import AuthNavbar from "./AuthNavbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <AuthNavbar />
      <div className="container col-lg-4 col-md-6 col-sm-7 pt-2 card">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <img src="images/avatar-150.png" className="rounded-circle" alt="" />
        </div>
        <h3 className="mb-4 text-center">Login to Finder✌️</h3>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
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

          <div class="col-12 mt-4 d-flex justify-content-between align-items-center">
            <button type="submit" class="btn btn-primary px-5 py-3 ">
              Login
            </button>
            <Link className="text-blue" to="/reset">Forgotten Password</Link>
          </div>
        </Form>

        <hr />

        <div className="mt-4 col-12 d-flex justify-content-center align-items-center">
          <GoogleButton className="g-btn" onClick={handleGoogleSignIn} />
        </div>

        <div className="mt-3 p-4 box text-center">
          Don't have and account yet? <Link to="signup">Register</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
