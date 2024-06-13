// 配置路由
import { createRouter, createWebHashHistory } from "vue-router"

//引入路由组件

// 首页的二级页面
import Home from '@/pages/Index/Home/index.vue'
import Main from '@/pages/Index/Home/Pages/Main/index.vue'
import Recent_Works from '@/pages/Index/Home/Pages/Recent_Works/index.vue'
import Collection from '@/pages/Index/Home/Pages/Collection/index.vue'
import Personal_Space from '@/pages/Index/Home/Pages/Personal_Space/index.vue'
import Shared_Space from '@/pages/Index/Home/Pages/Shared_Space/index.vue'
import Brand from '@/pages/Index/Home/Pages/Brand/index.vue'

import Login from '@/pages/Login/index.vue'
import Login1 from '@/pages/Login1/index.vue'
import Register from '@/pages/Register/index.vue'
import Scene from '@/pages/Index/Scene/index.vue'
import Paid from '@/pages/Index/Paid/index.vue'
import Tutorial from '@/pages/Index/Tutorial/index.vue'
import Piece from '@/pages/Index/Piece/index.vue'

import Index from '@/pages/Index/index.vue'

let router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: '主页',
      path: '/',
      component: Index,
      children: [
        {
          name: '首页',
          path: '',
          component: Home,
          children: [
            {
              name: '首页',
              path: '',
              component: Main
            },
            {
              name: '最近作品',
              path: 'recent_work',
              component: Recent_Works,
            },
            {
              name: '我的收藏',
              path: 'collection',
              component: Collection,
            },
            {
              name: '个人空间',
              path: 'personal_space',
              component: Personal_Space,
            },
            {
              name: '共享空间',
              path: 'shared_space',
              component: Shared_Space,
            },
            {
              name: '品牌规范',
              path: 'brand',
              component: Brand,
            },

          ]
        },
        {
          name: '应用场景',
          path: '/scene',
          component: Scene
        },
        {
          name: '付费订阅',
          path: '/paid',
          component: Paid
        },

        {
          name: '教程',
          path: '/tutorial',
          component: Tutorial
        },
        {
          name: '作品中心',
          path: '/piece',
          component: Piece
        }

      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/login1',
      component: Login1
    },
    {
      path: '/register',
      component: Register
    },


  ],
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});

export default router;
