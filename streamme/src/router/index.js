import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from "@/views/DetailView";
import ComingView from "@/views/ComingView";
import ContactView from "@/views/ContactView";
import LoginorRegister from "@/views/LoginorRegister";

const routes = [
  {
    path: '/login',
    alias: '/login',
    name: 'login',
    component: LoginorRegister
  },
  {
    path: '/register',
    alias: '/register',
    name: 'register',
    component: LoginorRegister
  },
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailView,
  },
  {
    path: '/coming',
    name: 'coming',
    component: ComingView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
