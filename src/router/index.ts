// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeFRView from "../views/HomeFRView.vue";
import HomeENView from "../views/HomeENView.vue";

const routes = [
    {
        path: '/shiny-hunting-masters/',
        name: 'home_fr',
        component: HomeFRView
    },
    {
        path: '/shiny-hunting-masters/en',
        name: 'home_en',
        component: HomeENView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
