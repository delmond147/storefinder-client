import { useState, useEffect } from 'react'
import { storage } from '../firebase'

const useFireStore = (collection) => {
    const [docs, setDocs] = useState({})

    useEffect(() => {
        const unsubscribe = storage.collection(collection)
            // .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = []
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                })
                setDocs(documents)
            })
        return () => unsubscribe()
    }, [collection])
    return {docs}
}

export default useFireStore