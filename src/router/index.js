import Vue from "vue";
import VueRouter from "vue-router";


const login = () =>import ('components/login.vue')

Vue.use(VueRouter)

const routes = [
    {
        path:'/login',
        component: login
    }
]

const router = new VueRouter({
    routes
})

export default router