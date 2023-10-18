import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
  error.value = null
  // when we start the login process
  isPending.value = true

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    error.value = null
    // completed the action we wanted to do (login process)
    isPending.value = false
    return res
  }
  catch(err) {
    console.log(err.message)
    error.value = 'Incorrect login credentials'
    isPending.value = false
  }
}

const useLogin = () => {
  return { error, login, isPending }
}

export default useLogin