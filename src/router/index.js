import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import CreateBlogpost from '../views/blogposts/CreateBlogpost.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
  },

  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },

  {
    path: '/blogpost/create',
    name: 'CreateBlogPost',
    component: CreateBlogpost

  }


  


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
