import Vue from 'vue'
import Router from 'vue-router'
// import system from './module/system'

Vue.use(Router)
// const routeChildren = [...system]

/* Layout */
import Layout from '@/views/home/index'

export const constantRouterMap = [{
    path: '/404',
    component: () => import('../views/404/index')
  },
  {
    path: '/',
    component: () => import('../views/home/index'),
    // children: routeChildren
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
          path: '/grid',
          name: 'grid',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/views/grid/index')
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]

export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})