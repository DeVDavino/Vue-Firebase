<template>
    <form @submit.prevent="handleSubmit">
      <h3>Login</h3>
      <input class="input" type="text" placeholder="Display name" v-model="displayName">
      <input class="input" type="email" name="email" placeholder="Email" v-model="email">
      <input class="input" type="password" name="password" placeholder="Password" v-model="password">
      <div v-if="error" class="error">{{ error }}</div>
      <!-- Display login button, when the sign in is being processed show the loading button -->
      <button v-if="!isPending">Sign up</button>
      <button v-if="isPending"  disabled>Loading</button>
    </form>  
  </template>

<script>

    import useSignup from '@/composables/useSignup';
    import { ref } from 'vue';

    export default{

        setup(){
            
            const { error, signup, isPending } = useSignup()
            const email = ref('');
            const password = ref('');
            const displayName = ref('');

            const handleSubmit = async () =>{
                const res = await signup(email.value, password.value, displayName.value);
                if(!error.value){
                    console.log('user signed up', res)
                }
            }

            return { email, password, displayName, isPending, error, handleSubmit}

        }
    }

</script>

<style scoped>
    .input{
    border-bottom: 1px solid 	#D3D3D3;
    }
    .input:focus{
    transform: translateX(5px);
    border-bottom: 1px solid 	#e79439
    }

    .input:focus::placeholder{
    color: #e79439;
    }
</style>

  