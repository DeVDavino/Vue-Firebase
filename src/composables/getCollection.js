import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

// Set up a generic function to get a collection
const getCollection = (collection) => {

  const documents = ref(null)
  const error = ref(null)

  // register the firestore collection reference
  let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')

  const unsub = collectionRef.onSnapshot(snap => {
    let results = []
    snap.docs.forEach(doc => {
      // must wait for the server to create the timestamp & send it back
      doc.data().createdAt && results.push({...doc.data(), id: doc.id})
    });
    
    // update values
    documents.value = results
    error.value = null
  }, err => {
    console.log(err.message)
    documents.value = null
    error.value = 'could not fetch the data'
  })

  // watchEffect is a function that runs when the component is mounted
  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, documents }
}

export default getCollection