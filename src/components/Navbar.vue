<template>
    <div class="navbar">
        <nav>
            <router-link :to="{name: 'home'}"><img src="@/assets/userIcon.jpg" alt="logo"></router-link>
            <h1><router-link :to="{name: 'home'}"><p>DaviTech</p></router-link></h1>
            <div class="links">
                <div v-if="user">
                    <button @click="handleClick">Logout</button>
                </div>
                <div v-else>
                    <router-link class="btn" :to="{name: 'Signup'}">Signup</router-link>
                    <router-link class="btn" :to="{name : 'Login'}">Log in </router-link>
                </div>
            </div>
        </nav>

    </div>

</template>

<script>
    import useLogout from '@/composables/useLogout';
    import getUser from '@/composables/getUser';
    import { useRouter } from 'vue-router';

    export default {
        setup() {
            // call the getUser composable
            const { user } = getUser();
            // call the logout function from the useLogout composable
            const { logout } = useLogout();
            // invoke the router
            const router = useRouter();
            // create a function to handle the logout
            const handleClick = async () => {
                await logout();
                console.log(' user logged out');
                // push the login router after user logged out
                router.push({ name: 'Login' });
            }

            return { logout, handleClick , user}
        },
    }
</script>

<style scoped>

    .navbar{
        padding: 10px 10px;
        margin-bottom: 60px;
        background: #0e0e0e;
       
    }

    nav{
        display: flex;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
    }

    nav h1{
        margin-left: 20px;
    }

    nav h1:hover{
        transform: scale(1.05);
    }

    nav h1 p{
        color: #fcfcff;
        text-shadow: #FC0 .5px 0 10px;
    }

    nav .links{
        margin-left: auto;
    }

    nav .links a, button{
        margin-left: 16px;
        font-size: 14px;
    }

    img{
        max-height: 75px;
        border-radius: 50%;
        box-shadow: 0px 1px 40px 10px rgba(69, 68, 68, 0.5);
    }

    img:hover{
        transform: scale(1.05);
        box-shadow: 0px 1px 40px 10px rgba(255, 186, 89, 0.25);
        cursor: pointer;
    }

</style>


