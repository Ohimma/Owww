const login = {}

login.routers = [{
        path: 'login01',
        component: () =>
            import ('../pages/login/login01.vue'),
    },
    {
        path: 'login02',
        component: () =>
            import ('../pages/login/login02.vue'),
    },
    {
        path: 'login03',
        component: () =>
            import ('../pages/login/login03.vue'),
    },
    {
        path: 'login04',
        component: () =>
            import ('../pages/login/login04.vue'),
    },
]

export default login