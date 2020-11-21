import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("../view/home/Home")
const Hot = () => import("../view/hot/Hot")
const Search = () => import("../view/search/Search")
const Detail = () => import("../view/detail/Detail")
const DetailMusicPlay = () => import("../view/detail/DetailMusicPlay")


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/hot',
    component: Hot
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/play/:id',
    component: DetailMusicPlay
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
