import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { auth, db } from '../firebase';
import DeleteStore from './DeleteStore';
import { useAuthState } from 'react-firebase-hooks/auth';
import LikeStore from './LikeStore';
import { Link, useNavigate } from 'react-router-dom';

export default function Stores() {
  const [stores, setStores] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const storeRef = collection(db, 'stores');
    const q = query(storeRef, orderBy('createdAt', 'desc'));
    onSnapshot(q, (snapshot) => {
      const stores = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStores(stores);
      console.log(stores);
    });
  }, []);
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-0 gx-5 align-items-end">
          <div className="col-lg-6">
            <div
              className="text-start mx-auto mb-5 wow slideInLeft"
              data-wow-delay="0.1s"
            >
              <h1 className="mb-3">Store Listing</h1>
              <p>
                Book a store of your choice or browse for more stores to fine
                your match!
              </p>
            </div>
          </div>
          <div
            className="col-lg-6 text-start text-lg-end wow slideInRight"
            data-wow-delay="0.1s"
          >
            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
              <li className="nav-item me-2">
                {user ? (
                  <button
                    onClick={() => navigate('/register-store')}
                    className="btn btn-warning add-btn text-warning px-3 py-3 me-2"
                  >
                    Register Store
                  </button>
                ) : (
                  <button
                    onClick={() => navigate('/signin')}
                    className="btn btn-warning add-btn text-warning px-3 py-3 me-2"
                  >
                    Register Store
                  </button>
                )}
              </li>
              <li className="nav-item me-2">
                <button
                  className="btn btn-outline-primary px-3 py-3"
                  data-bs-toggle="pill"
                >
                  For Sell
                </button>
              </li>
              <li className="nav-item me-0">
                <button
                  className="btn btn-outline-primary px-3 py-3"
                  data-bs-toggle="pill"
                >
                  For Rent
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            <div className="row g-4">
              {stores.length === 0 ? (
                <p className="text-center p-4">
                  No stores found! Check your connection.
                </p>
              ) : (
                stores.map(
                  ({
                    id,
                    title,
                    category,
                    purpose,
                    amount,
                    location,
                    size,
                    contact,
                    imageUrl,
                    createdAt,
                    createdBy,
                    userId,
                    likes,
                    comments,
                  }) => (
                    <div
                      className="col-lg-4 col-md-6 wow fadeInUp"
                      data-wow-delay="0.1s"
                      key={id}
                    >
                      <div className="property-item rounded overflow-hidden">
                        <div className="row">
                          <div className="col-6">
                            {createdBy && (
                              <span className="badge text-dark">
                                Owner: {createdBy}
                              </span>
                            )}
                          </div>
                          <div className="col-6 d-flex flex-row-reverse">
                            {user && user.uid === userId && (
                              <DeleteStore id={id} imageUrl={imageUrl} />
                            )}
                          </div>
                        </div>
                        <div className="position-relative overflow-hidden">
                          <img
                            className="img-fluid"
                            src={imageUrl}
                            alt="Property"
                          />

                          <div className="bg-dark rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                            {purpose}
                          </div>
                          <div className="bg-white rounded-top text-dark position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                            {category}
                          </div>
                        </div>
                        <div className="p-4 pb-0">
                          <h5 className="text-dark mb-2">{amount} FCFA</h5>

                          <p className="h6 text-dark">{title}</p>

                          <a href="https://googlmaps." className="text-primary">
                            <i className="fa fa-map-marker text-primary me-2"></i>
                            {location}
                          </a>

                          <div className="">
                            <a href={`tel:${contact}`} className="text-dark">
                              <i className="fa fa-phone text-primary me-3"></i>
                              {contact}
                            </a>
                          </div>
                        </div>
                        <div className="d-flex flex-row-reverse">
                          {user && <LikeStore id={id} likes={likes} />}
                          <div className="pe-2">
                            <p>{likes?.length} likes</p>
                          </div>
                          {comments && comments.length > 0 && (
                            <div className="pe-2">
                              <p>{comments?.length} comments</p>
                            </div>
                          )}
                        </div>
                        <div className="d-flex border-top">
                          <small className="flex-fill text-center border-end py-2">
                            <i className="fa-solid fa-ruler text-dark me-2"></i>
                            {size} Sq mtrs
                          </small>
                          <small className="flex-fill text-center border-end py-2">
                            <i className="text-dark me-2"></i>
                            {createdAt.toDate().toDateString()}
                          </small>
                          {user ? (
                            <Link to="https://buy.stripe.com/test_3cs9Ce6KCdRYa3edQR">
                              Rent
                            </Link>
                          ) : (
                            <button
                              onClick={() => navigate('/signin')}
                              className="btn btn-dark px-3"
                            >
                              Rent
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className="container col-md-7 col-sm-3 text-center wow mt-4 fadeInUp"
        data-wow-delay="0.1s"
      >
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  );
}
