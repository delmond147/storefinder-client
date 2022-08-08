import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Checkout() {
    const handleCheckout = () => { }
    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Pay with momo" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Pay with card" />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="primary" type="submit" onClick={handleCheckout}>
                    Continue
                </Button>
            </Form>
        </Container>
    )
}

export default Checkout