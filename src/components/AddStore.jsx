import React, { useState } from 'react';
import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db, auth } from './../firebase';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer/Footer';

export default function AddStore() {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    purpose: '',
    amount: Number,
    location: '',
    contact: Number,
    size: Number,
    description: '',
    image: '',
    createdAt: Timestamp.now().toDate(),
  });

  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (
      !formData.title ||
      !formData.category ||
      !formData.purpose ||
      !formData.amount ||
      !formData.location ||
      !formData.contact ||
      !formData.size ||
      !formData.image
    ) {
      <Alert variant="danger" dismissible>
        Please fill in all the fields
      </Alert>;
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      'state_changed',
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: '',
          category: '',
          purpose: '',
          amount: null,
          location: '',
          contact: null,
          size: null,
          description: '',
          image: '',
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const storeRef = collection(db, 'stores');
          addDoc(storeRef, {
            title: formData.title,
            category: formData.category,
            purpose: formData.purpose,
            amount: formData.amount,
            location: formData.location,
            contact: formData.contact,
            size: formData.size,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
            createdBy: user.displayName,
            userId: user.uid,
            likes: [],
            comments: [],
          })
            .then(() => {
              toast('Store added successfully', { type: 'success' });
              setProgress(0);
              navigate('/stores');
            })
            .catch((err) => {
              toast('Error adding Store', { type: 'error' });
            });
        });
      }
    );
  };

  return (
    <>
      <div className="container bg-dark col-lg-4 col-md-6 col-sm-7 pt-2 mt-2 mb-2 card ">
        {!user ? (
          navigate('/signin')
        ) : (
          <>
            <div className="d-flex justify-content-center align-items-center mb-4 mt-4">
              <Link to="/" className="navbar-brand">
                <i className="fa fa-home me-1"></i>
              </Link>
              <h3 className="text-center text-light">Add Store✌️</h3>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="title"
                className="form-control"
                value={formData.title}
                onChange={(e) => handleChange(e)}
              />
              <label for="floatingInput">Title</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="category"
                value={formData.category}
                class="form-control"
                id="floatingInput"
                onChange={(e) => handleChange(e)}
              />
              <label for="floatingInput">Add category</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="purpose"
                value={formData.purpose}
                class="form-control"
                id="floatingInput"
                onChange={(e) => handleChange(e)}
              />
              <label for="floatingInput">Purpose, For rent or For sell</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="number"
                name="amount"
                value={formData.amount}
                class="form-control"
                id="floatingInput"
                onChange={(e) => handleChange(e)}
              />
              <label for="floatingInput">Amount</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="location"
                value={formData.location}
                class="form-control"
                id="floatingInput"
                onChange={(e) => handleChange(e)}
              />
              <label for="floatingInput">City</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="number"
                name="size"
                value={formData.size}
                class="form-control"
                id="floatingInput"
                onChange={(e) => handleChange(e)}
              />
              <label for="floatingInput">Area</label>
            </div>

            {/* description */}
            <div className="form-floating mb-3">
              <input
                type="number"
                name="contact"
                className="form-control"
                value={formData.contact}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="">Contact</label>
            </div>

            {/* image */}
            <div className="form-group mb-3">
              <label htmlFor="">Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                className="form-control"
                onChange={(e) => handleImageChange(e)}
              />
            </div>

            {progress === 0 ? null : (
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped mt-2"
                  style={{ width: `${progress}%` }}
                >
                  {`uploading image ${progress}%`}
                </div>
              </div>
            )}
            <button
              className="form-control btn-primary mt-2 mb-3"
              onClick={handlePublish}
            >
              Register Store
            </button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
