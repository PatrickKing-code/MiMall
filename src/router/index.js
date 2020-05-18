import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue'),
    redirect: {
      name: "index"
    },
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import('../views/index.vue')
      },
      {
        path: "/product/:id",
        name: "product",
        component: () => import('../views/product.vue')
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('../views/detail.vue')
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order.vue'),
    redirect: {
      name: 'order-list'
    },
    children: [
      {
        path: 'confirm',
        name: 'order-confirm',
        component: () => import('../views/orderConfirm.vue')
      },
      {
        path: 'list',
        name: 'order-list',
        component: () => import('../views/orderList.vue')
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: () => import('../views/orderPay.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
