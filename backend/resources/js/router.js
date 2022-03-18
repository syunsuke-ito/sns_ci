import Vue from 'vue'
import VueRouter from 'vue-router'

import index from './pages/index.vue'


Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        component: index
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})


export default router
