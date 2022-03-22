import { createRouter, createWebHashHistory } from 'vue-router'

import login from "./login.js"
import error from "./error.js"
import nav from "./nav.js"

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
        path: '/error',
        component: () =>
            import ('../pages/error/index.vue'),
        children: error.routers,
    },
    {
        path: '/nav',
        component: () =>
            import ('../pages/nav/index.vue'),
        children: nav.routers,
    },
]



const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})



export default router