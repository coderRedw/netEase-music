import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("../view/home/Home")
const Hot = () => import("../view/hot/Hot")
const Search = () => import("../view/search/Search")
const Detail = () => import("../view/detail/Detail")
const MusicPlay = () => import("../components/common/musicPlay/MusicPlay")
const DownLoadApp = () => import("../components/content/downloadApp/DownLoadApp")
const UserPlayList = () => import("../components/content/userPlayList/UserPlayList")


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/hot',
    component: Hot,
    meta: {
      title: '热门歌曲'
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      title: '搜索'
    }
  },
  {
    path: '/detail/:id',
    component: Detail,
    meta: {
      title: '歌单详情'
    }
  },
  {
    path: '/play/:id',
    component: MusicPlay,
    meta: {
      title: '播放页面'
    }
  },
  {
    path: '/downLoadApp',
    component: DownLoadApp,
    meta: {
      title: '下载APP'
    }
  },
  {
    path: '/userPlayList/:userId',
    component: UserPlayList,
    meta: {
      title: '用户歌单页面'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach((to, from ,next) => {
  document.title =to.meta.title
  // console.log(to)
  next()
})

export default router
