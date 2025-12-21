// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import RulesView from "../views/RulesView.vue";
import HallOfFameView from "../views/HallOfFameView.vue";

const routes = [
    {
        path: '/shiny-hunting-masters/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/shiny-hunting-masters/rules',
        name: 'rules',
        component: RulesView
    },
    {
        path: '/shiny-hunting-masters/hall-of-fame',
        name: 'hallOfFame',
        component: HallOfFameView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
