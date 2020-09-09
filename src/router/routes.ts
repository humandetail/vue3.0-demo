// 路由配置

import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },

  {
    path: '/ractive',
    name: 'Reactive',
    component: () => import(/* webpackChunkName: "reactive" */ '../views/Reactive.vue')
  },

  {
    path: '/ref',
    name: 'Ref',
    component: () => import(/* webpackChunkName: "ref" */ '../views/Ref.vue')
  },

  {
    path: '/computed',
    name: 'Computed',
    component: () => import(/* webpackChunkName: "computed" */ '../views/Computed.vue')
  },

  {
    path: '/watch',
    name: 'Watch',
    component: () => import(/* webpackChunkName: "watch" */ '../views/Watch.vue')
  },

  {
    path: '/lifeCycle',
    name: 'LifeCycle',
    component: () => import(/* webpackChunkName: "lifeCycle" */ '../views/LifeCycle.vue')
  },

  {
    path: '/provideAndInject',
    name: 'ProvideAndInject',
    component: () => import(/* webpackChunkName: "provideAndInject" */ '../views/ProvideAndInject.vue')
  },

  {
    path: '/renderFunction',
    name: 'RenderFunction',
    component: () => import(/* webpackChunkName: "renderFunction" */ '../views/RenderFunction.vue')
  }

];

export default routes;