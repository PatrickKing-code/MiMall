import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const viewRoutes = [
  {
    path: "/recipe",
    name: 'recipe',
    component: () => import('../views/user/recipe.vue')
  },
  {
    path: "/create",
    name: "create",
    component: () => import('../views/user/create.vue'),
    meta: {
      isLogin: true
    }
  },
  {
    path: "/edit",
    name: "edit",
    component: () => import('../views/user/edit.vue'),
    meta: {
      isLogin: true
    }
  },
  {
    path: "/space",
    name: 'space',
    component: () => import('../views/user/space.vue'),
    redirect: {
      name: 'works'
    },
    meta: {
      isLogin: true
    },
    children: [
      {
        path: '/works',
        name: 'works',
        import: () => import('../views/user/works.vue')
      },
      {
        path: '/fans',
        name: 'fans',
        import: () => import('../views/user/fans.vue')
      },
      {
        path: '/collection',
        name: 'collection',
        import: () => import('../views/user/collection.vue')
      }
    ]
  }
]


const routes = [
  {
    path: "/",
    name: 'home',
    component: () => import('../views/home.vue'),
    meta: {
      title: '首页'
    },
    children: [
      ...viewRoutes,
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../views/login/login.vue')
  },
  {
    path: "*",
    redirect: {
      name: 'notFound'
    }
  },
  {
    path: "/404",
    name: "notFound",
    component: () => import("../views/404.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
