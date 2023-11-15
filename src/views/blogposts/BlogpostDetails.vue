<template>
    <div class="wrapper">
        <div v-if="error" class="error">{{ error }}</div>
        <div v-if="document" class="post-details">
        
            <div class="post-info">

                <div class="cover">
                    <img :src="document.coverUrl" alt="">
                </div>
                <h2>{{ document.title}}</h2>
                <p class="username"> Created by {{ document.userName }}</p>
                <p class="description"> {{ document.description}}</p>

            </div>
        
        
        </div>
    </div>
    
</template>

<script>
import getDocument from '@/composables/getDocument';

export default {
    props: ['id'],

    setup(props){
        // pass the collection and the id to the getDocument composable
        const { document, error } = getDocument('posts', props.id);

        return { document, error }
    }
}
</script>

<style scoped>
    .wrapper{
        margin-top: 200px;
        border: 1px solid #ccc;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
    }

    .post-details{
       display: grid;
       grid-template-columns: 1fr 2fr;
       gap: 80px;
       grid-column-start: 2 span 1;

    }

    .cover{
        overflow: hidden;
        border-radius: 20px;
        position: relative;
        padding: 160px;
    }

    .cover img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    .post-info p{
        margin-bottom: 20px;
    }
</style>
