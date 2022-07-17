import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { auth, db } from "../firebase";
import LikeStore from "./LikeStore";
import Comment from './Comment';

export default function Stores() {
  const { id } = useParams();
  const [store, setStore] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const docRef = doc(db, "stores", id);
    onSnapshot(docRef, (snapshot) => {
      setStore({ ...snapshot.data(), id: snapshot.id });
    });
  }, []);
  return (
    <div className="container border bg-light" style={{ marginTop: 70 }}>
      {store && (
        <div className="row">
          <div className="col-3">
            <img
              src={store.imageUrl}
              alt={store.title}
              style={{ width: "100%", padding: 10 }}
            />
          </div>
          <div className="col-9 mt-3">
            <h2>{store.title}</h2>
            <h5>Author: {store.createdBy}</h5>
            <div> Posted on: {store.createdAt.toDate().toDateString()}</div>
            <hr />
            <h4>{store.description}</h4>

            <div className="d-flex flex-row-reverse">
              {user && <LikeStore id={id} likes={store.likes} />}
              <div className="pe-2">
                <p>{store.likes.length}</p>
              </div>
            </div>
            {/* comment  */}
            <Comment id={store.id} />
          </div>
        </div>
      )}
    </div>
  );
}
