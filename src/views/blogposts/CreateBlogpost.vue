<template>
  <div class="wrapper">
    <form @submit.prevent="handleSubmit">
        <h4>Create New Blogpost</h4>
        <input class="input" type="text" required placeholder="Blogpost title" v-model="title">
        <textarea class="input" required placeholder="Blogpost description..." v-model="description"></textarea>
        <!-- upload blogpost image -->
        <label>Upload blogpost cover image</label>
        <input class="input" type="file" @change="handleChange">
        <div class="error"> {{ fileError }}</div>

        <div class="error"></div>
        <button v-if="!isPending">Create</button>
        <button v-else disabled>Saving...</button>
    </form>

  </div>  <!-- prevent default action -->
  
</template>

<script>
import { ref } from 'vue'
import useStorage from '@/composables/useStorage'
import useCollection from '@/composables/useCollection';
import getUser from '@/composables/getUser';
import { timestamp } from '@/firebase/config';

export default {
    setup(){

        const {filePath , url, uploadImage } = useStorage();
        // firebase will create a collection if it doesn't exist
        const { error, addDoc } = useCollection('posts');
        const { user } = getUser();

        const title = ref('');
        const description = ref('');
        const file = ref(null);
        const fileError = ref(null);
        const isPending = ref(false)

        const handleSubmit = async () =>{
            // only if there is value of the file will the user be allowed to submit the form
            if(file.value){
                isPending.value = true
                await uploadImage(file.value);
                console.log('image uploaded, url: ', url.value);
                await addDoc({
                    title: title.value,
                    description: description.value,
                    userId: user.value.uid,
                    userName: user.value.displayName,
                    coverUrl: url.value,
                    filePath: filePath.value,
                    postInfo: [],
                    createdAt: timestamp(),
                })
                isPending.value = false;
                if(!error.value){
                    console.log('post added')
                }
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

        

        return { title, description, handleSubmit, handleChange, fileError, useStorage, useCollection, getUser, timestamp, isPending}
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