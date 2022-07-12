import React, {useState} from 'react'
import { db } from '../firebase'

const AddStore = () => {
    const [store, setStore] = useState("")
    const [category, setCategory] = useState("")
    const [purpose, setPurpose] = useState("")
    const [amount, setAmount] = useState("")
    const [location, setLocation] = useState("")
    const [size, setSize] = useState("")
    // const [file, setFile] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        db.collection("stores")
            .add({
                store: store,
                category: category,
                purpose: purpose,
                amount: amount,
                location: location,
                size: size,
                // file: file,
            })
            .then(() => {
            alert("Store has been added successfuly")
            })
            .catch((err) => {
            alert(err.message)
            })
        
        setStore("")
        setCategory("")
        setPurpose("")
        setAmount("")
        setLocation("")
        setSize("")
        // setFile(null)
    }
    
    return (
        <div className="container bg-dark col-lg-4 col-md-6 col-sm-7 pt-2 card">
            <h3 className="mb-5 text-white text-center mt-5">Add Store to Finder✌️</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-4">
                    <input
                    type="text"
                    class="form-control"
                    value={store}
                    placeholder="name@example.com"
                    onChange={(e) => setStore(e.target.value)} 
                    />
                    <label for="floatingInput">Store Name</label>
                </div>

                <div className="form-floating mb-4">
                    <input
                    type="text"
                    class="form-control"
                    value={category}
                    placeholder="category"
                    onChange={(e) => setCategory(e.target.value)} 
                    />
                    <label for="floatingInput">Category</label>
                </div>

                <div className="form-floating mb-4">
                    <input
                    type="text"
                    class="form-control"
                    value={purpose}
                    placeholder="name@example.com"
                    onChange={(e) => setPurpose(e.target.value)} 
                    />
                    <label for="floatingInput">Purpose - For rent or For sell</label>
                </div>

                <div className="form-floating mb-4">
                    <input
                    type="number"
                    class="form-control"
                    value={amount}
                    placeholder="Amount"
                    onChange={(e) => setAmount(e.target.value)}
                    />
                    <label for="floatingInput">Amount</label>
                </div>

                <div className="form-floating mb-4">
                    <input
                    type="text"
                    class="form-control"
                    value={location}
                    placeholder="location"
                    onChange={(e) => setLocation(e.target.value)}
                    />
                    <label for="floatingInput">Location</label>
                </div>


                <div className="form-floating mb-4">
                    <input
                    type="number"
                    class="form-control"
                    value={size}
                    placeholder="size"
                    onChange={(e) => setSize(e.target.value)}
                    />
                    <label for="floatingInput">Size</label>
                </div>

                {/* <div className="form-floating">
                    <input
                    type="file"
                    class="form-control"
                    id="floatingInput"
                    value={file}
                    placeholder="image"
                    onChange={(e) => setFile(e.target.files)}
                    />  
                </div> */}

                <div className="col-12 mt-4 mb-3 d-flex justify-content-center align-items-center">
                    <button type="submit" class="btn btn-primary px-5 py-3 ">
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddStore