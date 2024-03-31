import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import BlogView from '@/views/BlogView/BlogView.vue'
import HomeView from '@/views/HomeView/HomeView.vue'
import BlogDetailsView from '@/views/BlogDetailsView/BlogDetailsView.vue'
import ProjectView from '@/views/ProjectView/ProjectView.vue'
import ProjectDetailsView from '@/views/ProjectDetailsView/ProjectDetailsView.vue'
import NotFound from '@/views/NotFound/NotFound.vue'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/blogdetails',
    name: 'blogdetails',
    component: BlogDetailsView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/projectdetails',
    name: 'projectdetails',
    component: ProjectDetailsView
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
