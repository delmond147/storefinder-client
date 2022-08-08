import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { auth, db } from '../firebase';
import LikeStore from './LikeStore';
import Comment from './Comment';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Stores() {
  const { id } = useParams();
  const [store, setStore] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const docRef = doc(db, 'stores', id);
    onSnapshot(docRef, (snapshot) => {
      setStore({ ...snapshot.data(), id: snapshot.id });
    });
  }, [id]);

  const handleToken = async (token) => {
    //  console.log(token);
    // const cart = { name: 'All Products', totalPrice };
    const response = await axios.post('http://localhost:8080/checkout', {
      token,
      // cart,
    });
    console.log(response);
    let { status } = response.data;
    console.log(status);
    if (status === 'success') {
      toast.success('Your order has been placed successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      // const uid = auth.currentUser.uid;
      // const carts = await fs.collection('Cart ' + uid).get();
      // for (var snap of carts.docs) {
      //   fs.collection('Cart ' + uid)
      //     .doc(snap.id)
      //     .delete();
      // }
    } else {
      alert('Something went wrong in checkout');
    }
  };

  return (
    <div className="container border bg-light" style={{ marginTop: 70 }}>
      {store && (
        <div className="row">
          <div className="col-3">
            <img
              src={store.imageUrl}
              alt={store.title}
              style={{ width: '100%', padding: 10 }}
            />
          </div>
          <div className="col-9 mt-3">
            <h2>{store.title}</h2>
            <h5>Author: {store.createdBy}</h5>
            <div> Posted on: {store.createdAt.toDate().toDateString()}</div>
            <hr />
            <h4>{store.contact}</h4>

            <div className="d-flex flex-row-reverse">
              {user && <LikeStore id={id} likes={store.likes} />}
              <div className="pe-2">
                <p>{store.likes.length}</p>
              </div>
            </div>
            {/* comment  */}
            <Comment id={store.id} />
            <StripeCheckout
              stripeKey="{replace with my stripe pk}"
              token={handleToken}
              billingAddress
              shippingAddress
              name="All Products"
              amount={store.amount}
            ></StripeCheckout>
            <button>Payout</button>
          </div>
        </div>
      )}
    </div>
  );
}
