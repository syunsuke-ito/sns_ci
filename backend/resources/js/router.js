import Vue from 'vue'
import VueRouter from 'vue-router'

import List from './pages/List.vue'
import Login from './pages/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: List
    },
    {
        path: '/login',
        component: Login
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
