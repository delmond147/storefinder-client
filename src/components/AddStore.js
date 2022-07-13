import React, { useState, useEffect } from 'react'
import { Form, Alert, InputGroup, Button } from 'react-bootstrap'
import StoreDataService from '../service/StoreService'
import Navbar from '../components/navbar/Navbar'
import { timeStamp } from '../firebase'

const AddStore = ({ id, setStoreId }) => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [purpose, setPurpose] = useState("")
    const [amount, setAmount] = useState("")
    const [size, setSize] = useState("")
    const [file, setFile] = useState("")
    const [message, setMessage] = useState({ error: false, msg: "" })
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage("")
        if (title === "" || category === "" || purpose === "" || amount === "" || size === "" || file === "") {
            setMessage({ error: true, msg: "Please fill in all fields " })
            return
        }

        const newStore = {
            title,
            category,
            purpose,
            amount,
            size,
            file,
            timeStamp
        }

        console.log(newStore)

        try {
            if (id === undefined && id === "") {
                await StoreDataService.updateStore(id, newStore)
                setStoreId("")
                setMessage({ error: false, msg: "Updated successfully"})
            } else {
                await StoreDataService.addStore(newStore)
                setMessage({ error: false, msg: "New Store added successfully"})
            }
        } catch (err) {
            setMessage({ error: true, msg: err.mssage})
        }
        setTitle("")
        setCategory("")
        setPurpose("")
        setAmount("")
        setSize("")
        setFile("")
    }

    const editHandler = async () => {
        setMessage("")
        try {
            const docSnap = await StoreDataService.getStore(id)
            console.log("The record is: ", docSnap.data())
            setTitle(docSnap.data().title)
            setCategory(docSnap.data().category)
            setPurpose(docSnap.data().purpose)
            setAmount(docSnap.data().amount)
            setSize(docSnap.data().size)
            setFile(docSnap.data().file)
        } catch (err) {
            setMessage({ error: true, msg: err.message})
        }
    }

    useEffect(() => {
        console.log("The id here is: ", id)
        if (id === undefined && id === "") {
            editHandler()
        }
    }, [id])


    return (
        <>
            <Navbar />
            <div className="container col-lg-4 p-4 box">
                {message?.msg && (
                    <Alert variant={message?.error ? "danger" : "success"}
                    dismissible
                    onClose={() => setMessage("")}>
                        {message?.msg}
                    </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formStoreTitle">
                        <InputGroup>
                            <InputGroup.Text id="formStoreTitle">S</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Store Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} 
                                
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formStoreCategory">
                        <InputGroup>
                            <InputGroup.Text id="formStoreCategory">C</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Store Category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)} 
                                
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formStorePurpose">
                        <InputGroup>
                            <InputGroup.Text id="formStorePurpose">P</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Purpose (For rent or For sell)"
                                value={purpose}
                                onChange={(e) => setPurpose(e.target.value)} 
                                
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formStoreAmount">
                        <InputGroup>
                            <InputGroup.Text id="formStoreAmount">A</InputGroup.Text>
                            <Form.Control
                                type="number"
                                placeholder="Amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)} 
                                
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formStoreSize">
                        <InputGroup>
                            <InputGroup.Text id="formStoreSize">S</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Area in sqft"
                                value={size}
                                onChange={(e) => setSize(e.target.value)} 
                                
                            />
                        </InputGroup>
                    </Form.Group>

                    

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit">
                            Add
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default AddStore