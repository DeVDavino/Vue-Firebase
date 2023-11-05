<template>
  <div class="wrapper">
      <form @submit.prevent="handleSubmit">
        <h3>Login</h3>
        <input class="input" type="email" name="email" placeholder="Email" v-model="email">
        <input class="input" type="password" name="password" placeholder="Password" v-model="password">
        <div v-if="error" class="error">{{ error }}</div>
        <!-- Display login button, when the sign in is being processed show the loading button -->
        <button v-if="!isPending">Log in</button>
        <button v-if="isPending"  disabled>Loading</button>
      </form>  
  </div>
  
</template>

<script>

  import useLogin from '@/composables/useLogin';
  import { ref } from 'vue';

  export default{

    setup(){

      const { error, login, isPending } = useLogin();

      const email = ref('');
      const password = ref('');
      
      const handleSubmit = async () =>{
        const res = await login(email.value, password.value);
        if(!error.value){
          console.log('user logged in', res)
        }
      
      }

      return {email, password, error, handleSubmit, isPending}

    }

  }

</script>

<style scoped>

  .wrapper{
    padding-top: 160px; /* Adjust this to match the height of your navbar */
  }
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