<template>
    <h1>Blog posts</h1>
    <div class="wrapper">
        
        <div class="container" v-for="post in posts" :key="post.id">
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
                    <p>{{ post.description}}</p>
                </div>

            </div>
            
        </div>
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
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  border-radius: 1rem;
}

.thumbnail img {
  width: 100%;
  height: 240px;
}
</style>