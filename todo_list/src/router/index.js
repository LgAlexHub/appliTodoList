// Faire les import des views/composants

const router = new VueRouter(
    [
        {
            path:'/home',
            name : 'home',
            component: Home
        }
    ]
)

export default router;