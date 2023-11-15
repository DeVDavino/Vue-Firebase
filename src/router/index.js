import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import CreateBlogpost from '../views/blogposts/CreateBlogpost.vue'
import BlogpostDetails from '../views/blogposts/BlogpostDetails.vue'

// route gaurd, only show the route if the user is logged in
import { projectAuth } from '../firebase/config'

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  // if there is no user, redirect to login page
  if(!user){
    next({ name: 'Login'})
  }else{
    // allow to enter route
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: requireAuth,
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
    component: CreateBlogpost,
    beforeEnter: requireAuth,
  },

  {
    path: '/blogpost/:id',
    name: 'BlogpostDetails',
    component: BlogpostDetails,
    beforeEnter: requireAuth,
    props: true,
  }


  


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
