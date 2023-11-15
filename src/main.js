import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { projectAuth } from './firebase/config'

// styles
import './assets/main.css'

// state is first null, then it is the user object
let app;

// first change in authentication state, create the app
projectAuth.onAuthStateChanged(() => {
    // if app is not created, create it. Doesn't remount if it already exists
    if(!app){
        app = createApp(App).use(router).mount('#app')
    } 
})

