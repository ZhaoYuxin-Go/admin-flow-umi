export default [
    {
        path: '/user',
        layout: false,
        routes: [
            {
                path: '/user',
                routes: [
                    {
                        name: 'login',
                        path: '/user/login',
                        component: './user/Login',
                    },
                ],
            },
            {
                component: './404',
            },
        ],
    },
    {
        path: '/welcome',
        name: 'welcome',
        icon: 'smile',
        component: './Welcome',
    },
    {
        path: '/admin',
        name: 'admin',
        icon: 'crown',
        access: 'canAdmin',
        component: './Admin',
        routes: [
            {
                path: '/admin/sub-page',
                name: 'sub-page',
                icon: 'smile',
                component: './Welcome',
            },
            {
                component: './404',
            },
        ],
    },
    {
        name: 'list',
        icon: 'table',
        path: '/list',
        component: './TableList',
        routes: [
            {
                name: 'table-list',
                path: '/list/table-list',
                component: './TableList',
            },
        ],
    },
    {
        name: 'demo',
        icon: 'alert',
        path: '/demo',
        component: './demo/Coding',
        routes: [
            {
                name: 'coding',
                path: '/demo/coding',
                component: './demo/Coding',
            },
        ],
    },
    {
        path: '/',
        redirect: '/welcome',
    },
    {
        component: './404',
    },
];
