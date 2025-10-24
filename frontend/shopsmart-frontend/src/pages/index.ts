import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('./Home.vue') },
  { path: '/products', name: 'Products', component: () => import('./Products.vue') },
  { path: '/category/:slug', name: 'Category', component: () => import('./Category.vue') },
  { path: '/categories', name: 'Categories', component: () => import('./Categories.vue') },
  { path: '/product/:id', name: 'Product', component: () => import('./Product.vue') },
  { path: '/cart', name: 'Cart', component: () => import('./Cart.vue') },
  { path: '/checkout', name: 'Checkout', component: () => import('./Checkout.vue'), meta: { requiresAuth: true } },
  { path: '/auth/login', name: 'Login', component: () => import('./Login.vue') },
  { path: '/account', name: 'Account', component: () => import('./Account.vue'), meta: { requiresAuth: true } },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('./NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// basic global guard — replace with your auth/store logic
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('auth_token') // simple example
  const isAdmin = localStorage.getItem('role') === 'admin'

  if (to.meta.requiresAuth && !isLoggedIn) {
    return next({ name: 'Login', query: { redirect: to.fullPath } })
  }
  if (to.meta.requiresAdmin && !isAdmin) {
    return next({ name: 'Home' })
  }
  next()
})

export default router