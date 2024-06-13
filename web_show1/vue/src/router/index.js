import { createRouter, createWebHashHistory } from 'vue-router'

import login from "./modules/login.js"

let routes = [{
        path: '/',
        redirect: 'home',
    },
    {
        path: '/home',
        component: () =>
            import ('../pages/home.vue'),
    },
    {
        path: '/login',
        component: () =>
            import ('../pages/login/index.vue'),
        children: login.routers,
    },
    {
        path: '/nav',
        component: () =>
            import ('../pages/navpage/index.vue'),
    },
]



const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})



export default router