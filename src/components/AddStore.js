import React, { useState, useEffect } from 'react'
import { Form, Alert, InputGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StoreDataService from '../service/StoreService'
import { storage } from '../firebase'
import { db } from '../firebase'

// const types = ["image/png", "image/jpg", "image/jpeg"]

const AddStore = ({ id, setStoreId }) => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [purpose, setPurpose] = useState("")
    const [amount, setAmount] = useState()
    const [location, setLocation] = useState("")
    const [size, setSize] = useState()
    const [fileUrl, setFileUrl] = useState()
    const [message, setMessage] = useState({ error: false, msg: "" })

    const handleFileChange = async (e) => {
        const file = e.target.file[0]
        const storageRef = storage.ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setFileUrl(await fileRef.getDownloadURL())
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        db.collection("stores").doc()
        setMessage("")
        if (title === "" || category === "" || purpose === "" || amount === "" || size === "" || location === "") {
            setMessage({ error: true, msg: "Please fill in all the fields. " })
            return
        }

        const newStore = {
            title,
            category,
            purpose,
            amount,
            size,
            location,
            fileUrl
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
        setLocation("")
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
            setLocation(docSnap.data().location)
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
            <div className="container bg-dark col-lg-4 p-4 box mt-5 card">
                {message?.msg && (
                    <Alert variant={message?.error ? "danger" : "success"}
                    dismissible
                    onClose={() => setMessage("")}>
                        {message?.msg}
                    </Alert>
                )}
                <div className="d-flex justify-content-center align-items-center">
                    <Link to="/" className="navbar-brand" >
                        <i className="fa fa-home me-1"></i>
                    </Link>
                    <h3 className="pt-3 mb-4 text-center text-light">Add Store</h3>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formStoreTitle">
                        <InputGroup>
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
                            <Form.Control
                                type="number"
                                placeholder="Amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)} 
                                
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formStoreLocation">
                        <InputGroup>
            
                            <Form.Control
                                type="text"
                                placeholder="City"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)} 
                                
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formStoreSize">
                        <InputGroup>
                            <Form.Control
                                type="number"
                                placeholder="Area in sqft"
                                value={size}
                                onChange={(e) => setSize(e.target.value)} 
                                
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formStoreImage">
                        <Form.Control type="file" onChange={handleFileChange} />
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