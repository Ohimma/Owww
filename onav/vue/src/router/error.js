const error = {}

error.routers = [{
        path: 'error01',
        component: () =>
            import ('../pages/error/error403.vue'),
    },
    {
        path: 'error02',
        component: () =>
            import ('../pages/error/error404.vue'),
    },
]

export default error