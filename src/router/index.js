import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Jsh from '@/components/Jsh'
import Index from '@/components/index'
import Skill from '@/components/skill'
import Good from '@/components/good'
import Insurance from '@/components/insurance'
import Friends from '@/components/friends'
import Toubao from '@/components/toubao'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: {
        title: '泰康在线'
      },
      component: Index
    },
    {
      path: '/HelloWorld',
      name: 'Hello',
      meta: {
        title: '首页'
      },
      component: HelloWorld
    },
    {
      path: '/jsh',
      name: 'Jsh',
      meta: {
        title: '第二页'
      },
      component: Jsh
    },
    {
      path: '/skill',
      name: 'Skill',
      meta: {
        title: '技能培训'
      },
      component: Skill
    },
    {
      path: '/good',
      name: 'Good',
      meta: {
        title: '兑换好礼'
      },
      component: Good
    },
    {
      path: '/insurance',
      name: 'Insurance',
      meta: {
        title: '投保演示'
      },
      component: Insurance
    },
    {
      path: '/friends',
      name: 'Friends',
      meta: {
        title: '邀请好友'
      },
      component: Friends
    },
    {
      path: '/toubao',
      name: 'Toubao',
      meta: {
        title: '立即投保'
      },
      component: Toubao
    }
  ]
})
