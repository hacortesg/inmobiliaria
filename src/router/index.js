import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cotizacion from '../views/Cotizacion.vue'
 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cotizacion',
    name: 'Cotizacion',
    component: Cotizacion
  }]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
