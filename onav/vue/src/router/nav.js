const nav = {}

nav.routers = [{
        path: 'nav01',
        component: () =>
            import ('../pages/nav/nav01.vue'),
    },
    {
        path: 'nav02',
        component: () =>
            import ('../pages/nav/nav02.vue'),
    },
]

export default nav