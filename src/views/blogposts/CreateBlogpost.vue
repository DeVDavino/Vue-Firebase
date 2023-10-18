<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create New Blogpost</h4>
    <input class="input" type="text" required placeholder="Blogpost title" v-model="title">
    <textarea class="input" required placeholder="Blogpost description..." v-model="description"></textarea>
    <!-- upload blogpost image -->
    <label>Upload blogpost cover image</label>
    <input class="input" type="file" @change="handleChange">
    <div class="error"> {{ fileError }}</div>

    <div class="error"></div>
    <button>Create</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        const title = ref('');
        const description = ref('');
        const file = ref(null);
        const fileError = ref(null);

        const handleSubmit = () =>{
            // only if there is value of the file will the user be allowed to submit the form
            if(file.value){
                console.log(title.value, description.value, file.value);
            }
            
        }

        // allowed file types to be uploaded
        const types = ['image/png','image/jpeg']

        // get access from the event
        const handleChange = (e) => {
            const selected = e.target.files[0];
            console.log(selected);

            // check if selected && if the type matches to the types array
            if(selected && types.includes(selected.type)) {
                file.value = selected;
                fileError.value = null;
            }else{
                file.value = null;
                fileError.value = 'Please select an image file (png or jpg)';
            }
        }

        

        return { title, description, handleSubmit, handleChange, fileError}
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

    input[type="file"]{
        border: 0;
        padding: 0;
    }

    label{
        font-size: 12px;
        display: block;
        margin-top: 30px;
    }

    button{
        margin-top: 20px;
    }

</style>