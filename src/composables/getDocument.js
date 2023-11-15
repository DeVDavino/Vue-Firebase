import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

// Set up a generic function to get a collection
const getDocument = (collection, id) => {

  const document = ref(null)
  const error = ref(null)

  // register the firestore single document reference
  let documentRef = projectFirestore.collection(collection).doc(id)

  // Setting up a realtime listener to a single document, every time there is a change we get a snapshot back
  const unsub = documentRef.onSnapshot(doc => {
    // if the document exists
    if(doc.data()){
        // spread syntax to get all of the properties of the document
        document.value = {...doc.data(), id: doc.id}
        // set the error value to null if there is data
        error.value = null
    }else{
        error.value = 'that document does not exist'
    }
     
  }, err => {
    console.log(err.message)
    error.value = 'could not fetch the data'
  })

  // watchEffect is a function that runs when the component is mounted, unsubscribe from the realtime listener (performance)
  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, document }
}

export default getDocument