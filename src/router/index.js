import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../pages/home/Home.vue')
const Video = () => import('../pages/Video.vue')
const Notices = () => import('../pages/Notices.vue')
const Profile = () => import('../pages/profile/Profile.vue')

import Login from '../pages/login/Login.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/profile'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      meta: {
        FooterShow: true
      }
    },
    {
      path: '/video',
      component: Video,
      meta: {
        FooterShow: true
      }
    },
    {
      path: '/notices',
      component: Notices,
      meta: {
        FooterShow: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        FooterShow: true
      }
    }
  ]
})
