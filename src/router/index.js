// Faire les import des views/composants
import Home from "../views/home.vue"
import Login from '../views/login.vue'
import Register from '../views/register.vue'

import { createWebHistory, createRouter } from "vue-router";

const routes =
    [
        {
            path:'/home',
            name : 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }
    ]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;