// import "./App.css";

import { onSnapshot, doc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import LikeStore from "./LikeStore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams, Link } from 'react-router-dom'
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
    
    <>
      {store && (
        <>
          <div className="container">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={id}>
              <div className="property-item rounded overflow-hidden">
                <div className="row">
                  <div className="col-6">
                    {store.createdBy && (
                      <span className="badge bg-primary">{store.createdBy}</span>
                    )}
                  </div>
                </div>
                <div className="position-relative overflow-hidden">
                  <Link to={`/stores/${id}`}>
                    <img
                      className="img-fluid"
                      src={store.imageUrl}
                      alt="Property"
                    />
                  </Link>
                  <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{store.purpose}</div>
                  <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{store.category}</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-dark mb-2">{store.amount} FCFA</h5>
                  <p className="h6 text-secondary">{store.title}</p>
                  <p className="text-secondary"><i className="fa fa-map-marker-alt text-dark me-2"></i>{store.location}</p>
                  <p className="">{store.description}</p>
                </div>
                <div className="d-flex flex-row-reverse">
                  {user && <LikeStore id={id} likes={store.likes} />}
                  <div className="pe-2">
                    <p>{store.likes?.length} likes</p>
                  </div>
                  {store.comments && store.comments.length > 0 && (
                    <div className="pe-2">
                      <p>{store.comments?.length} comments</p>
                    </div>
                  )}
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-dark me-2"></i>{store.size} Sq mtrs</small>
                  <small className="flex-fill text-center border-end py-2"><i className="text-dark me-2"></i>{store.createdAt.toDate().toDateString()}</small>

                  <a href="/payment" className="btn btn-dark py-2 px-4">
                    {store.purpose.value === "For rent" ? "Buy" : "Rent"}
                  </a>
                </div>
              </div>
            </div>
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
        </>
      )}
      </>
  );
}

export default Payment;