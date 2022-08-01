import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="container bg-dark col-lg-4 col-md-6 col-sm-7 mt-3 pt-4 mb-4 card">
        <div className="d-flex justify-content-center align-items-center mb-4">
          <Link to="/" className="navbar-brand">
            <i className="fa fa-home me-1"></i>
          </Link>
          <h3 className="text-center text-light">Contact Us</h3>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="FormUserName">
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="FormUserEmail">
            <Form.Control type="text" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="FormUserName">
            <textarea
              type="text"
              className="w-100"
              placeholder="Message"
              style={{ height: "250px" }}
            />
          </Form.Group>

          <div className="col-12 d-flex justify-content-center align-items-center mb-4">
            <Button variant="primary" type="submit">
              Send message
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
