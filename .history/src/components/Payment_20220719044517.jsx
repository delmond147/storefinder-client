// import "./App.css";

import {  onSnapshot, doc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {useParams} from 'react-router-dom'
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Payment() {
  const { id } = useParams();
  const [store, setStore] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const docRef = doc(db, "stores", id);
    onSnapshot(docRef, (snapshot) => {
      setStore({ ...snapshot.data(), id: snapshot.id });
    });
  }, []);

  toast.configure()

  const [product] = useState({
    name: "Property payment",
    price: 12000,
    description: "This is a sample book",
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "http://localhost:8080/checkout",
      { token, product }
    );

    console.log(response.status)

    if (response.status === 200) {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="App">
      <div className="container">
        
        <h1 className="text-center">Stripe Checkout</h1>
        <h2 className="text-center">Product Info</h2>
        <h3 className="text-center">Product Name: {product.name}</h3>
        <h3 className="text-center">Product Price: {product.price}</h3>
        <h3 className="text-center">
          Product Description: {product.description}
        </h3>
        <br />
        <div className="form-group container">
          <StripeCheckout
            className="center"
            stripeKey="pk_test_51JfPvMEohH2JsejcMYZq7wyh7kAvjQ7CSXuKJE7Cx68n7zZyo33xmLAyQaW60ntusgiKHrQfHYEVK7SXr8pwJw7C00Mj6h2o2M"
            token={handleToken}
            amount={product.price * 100}
            name="Store Payment"
            billingAddress
            shippingAddress
          />
        </div>
      </div>
    </div>
  );
}

export default Payment;