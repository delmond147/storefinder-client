import { ref, set } from 'firebase/database'
import db from '../firebase'

const creatStore = (storeId, category, name, description, amount, imgUrl, location) => {
    set(ref(db, 'stores/' + storeId), {
        storeName: name,
        category: category,
        description: description,
        amount: amount,
        location: location,
        storeImg: imgUrl
    })
}