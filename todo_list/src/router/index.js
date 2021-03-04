// Faire les import des views/composants
import Home from "../components/Home";
import { createWebHistory, createRouter } from "vue-router";

const routes =
    [
        {
            path:'/home',
            name : 'home',
            component: Home
        }
    ]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;