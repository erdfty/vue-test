import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login.vue'
import Home from '@/view/Home.vue'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    routes: [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        children:[
            {
                path: 'list',
                name:'list',
                component:() => import(/* webpackChunkName: "list" */ '../view/List.vue'),
                children:[

                ]
            },
            {
                path: 'user',
                name:'user',
                component:() => import(/* webpackChunkName: "list" */ '../view/User.vue')
            },
            {
                path: '/info',
                name:'info',
                component:() => import(/* webpackChunkName: "info" */ '../view/Info.vue')
            }
        ]
    },
    {
        path: '/add',
        name: 'add',
        component:() => import(/* webpackChunkName: "add" */ '../view/Add.vue')
    }
]
})
