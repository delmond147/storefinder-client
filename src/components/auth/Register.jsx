import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap'
import { useUserAuth } from '../../context/UserAuthContext'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { signUn } = useUserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
        await signUn(email, password)
        navigate("/")
        } catch (err) {
        setError(err.message)
        }
    }


    return (
        <>
        <div className="p-4 box">
            <h2 className="mb-3">Login to Finder✌️</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <div className="d-grid gap-2 mb-3">
                <Button variant="primary" type="submit">
                Login
                </Button>
            </div>

            </Form>

            <div className="mt-2 p-4 box text-center">
            Don't have an account? <Link to="/signup">Register</Link>
            </div>

        </div>
        </>
    )
    }

export default Register