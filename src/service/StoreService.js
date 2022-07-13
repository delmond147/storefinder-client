import { db } from "../firebase";

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const storeCollectionRef = collection(db, "stores");
class StoreDataService {
    addStore = (newStore) => {
        return addDoc(storeCollectionRef, newStore);
    };

    updateStore = (id, updatedStore) => {
        const storeDoc = doc(db, "stores", id);
        return updateDoc(storeDoc, updatedStore);
    };

    deleteStore = (id) => {
        const storeDoc = doc(db, "stores", id);
        return deleteDoc(storeDoc);
    };

    getAllStores = () => {
        return getDocs(storeCollectionRef);
    };

    getStore = (id) => {
        const storeDoc = doc(db, "stores", id);
        return getDoc(storeDoc);
    };
}

export default new StoreDataService();