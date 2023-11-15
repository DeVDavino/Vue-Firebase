<template>
    <h1>Blog posts</h1>
    <div class="wrapper">
        
        
        <div class="container" v-for="post in posts" :key="post.id">
            
            <!-- redirects onclick to the selected playlist using params to get the collection id -->
            <router-link :to="{name: 'BlogpostDetails', params: {id: post.id}}">
                <div class="post">
                    <div class="thumbnail">
                        <img :src="post.coverUrl">
                    </div>

                    <div class="details">

                        <div class="info">
                            <h3>{{ post.title }}</h3>
                            <!-- <p>Created by {{ post.userName}}</p> -->
                        </div>

                        <div class="description">
                            <p>{{ post.description }}</p>
                        </div>
                    </div>
                
                </div>
            </router-link>
        
        </div>

    </div>
    
    
</template>


<script>
    export default {
        name: 'BlogPost',
        props: ['posts'],
    }
</script>


<style scoped>

.wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    padding: 2rem;
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
}

.details{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: .8rem;

}

.info{
    margin-bottom: .25rem;
}
.post {
    width: 300px; /* Set the width */
    height: 400px; /* Set the height */
    margin: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    border-radius: 1rem;
    transition: all ease 0.2s;
}

.post:hover{
    box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.15);
    transform: scale(1.05);
    transition: all ease 0.2s;
}

.thumbnail img {
  width: 100%;
  height: 240px;
}


</style>