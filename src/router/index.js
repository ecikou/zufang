import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'

const Home = () => import('@/views/Home')
const Fiandroom = () => import('@/views/Fiandroom')
const My = () => import('@/views/My')
const News = () => import('@/views/News')
const Login = () => import('@/views/Login')
const Torent = () => import('@/views/Home/components/Torent.vue')
const Fandmaproom = () => import('@/views/map/Fandmaproom.vue')
const City = () => import('@/views/city/index.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/home', component: Home },
      { path: '/Fiandroom', component: Fiandroom },
      { path: '/My', component: My },
      { path: '/News', component: News }
    ]
  },
  { path: '/login', component: Login },
  { path: '/torent', component: Torent },
  { path: '/fandmaproom', component: Fandmaproom },
  { path: '/city', component: City }
]

const router = new VueRouter({
  routes
})

export default router
