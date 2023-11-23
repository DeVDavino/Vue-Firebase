<template>

  <div class="home">
    <div v-if="error" class="error">Could not fetch the data</div>
    <div v-if="documents">
      <div v-for="doc in documents" :key="doc.id" >
        {{ doc.title }}
        {{ doc.description}}
        {{ doc.userName }}
        {{ doc.createdAt }}
      </div>
    </div>
  </div>

  <div class="h">
    <Hero />
  </div>

  <div class="home">
    <!-- data bind collection to the documents and display it's content.  -->
    <ListView v-if="documents" :posts="documents" />
  </div>
  
  

</template>

<script>
import getCollection from '@/composables/getCollection'
import ListView from '@/components/ListView.vue'
import Hero from '@/components/Hero.vue'

  export default {
    name: 'Home',
    components: {
      ListView,
      Hero,
    },

    setup(){
      // getCollection is a custom composable function, that retrieves the data from the database
      const { error, documents } = getCollection('posts');

      return { error, documents}
    }
  }
</script>

<style scoped>

.home{
  padding-top: 160px; /* Adjust this to match the height of your navbar */
  position: relative;
}
</style>
