import { createRouter, createWebHashHistory } from 'vue-router'

// import contact from "./contact.js"

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
        path: '/about',
        component: () =>
            import ('../pages/about.vue'),
    },
    // {
    //     path: '/contact',
    //     component: () =>
    //         import ('../pages/contact/index.vue'),
    //     children: [{
    //             path: 'contact01',
    //             component: () =>
    //                 import ('../pages/contact/contact01.vue'),
    //         },
    //         {
    //             path: 'contact02',
    //             component: () =>
    //                 import ('../pages/contact/contact02.vue'),
    //         },
    //     ]
    // },
]



const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})



export default router