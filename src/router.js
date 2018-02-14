import Vue from 'vue'
import Router from 'vue-router'
const AdminPage = r => require.ensure([], () => (require('@/components/AdminPage')))
const ContactPage = r => require.ensure([], () => (require('@/components/ContactPage')))
const HomePage = r => require.ensure([], () => (require('@/components/HomePage')))
const ProductPage = r => require.ensure([], () => (require('@/components/ProductPage')))
const CustomerPage = r => require.ensure([], () => (require('@/components/CustomerPage')))

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage,
    },
    {
      path: '/products',
      name: 'productPage',
      component: ProductPage,
    },
    {
      path: '/contacts',
      name: 'contactPage',
      component: ContactPage,
    },
    {
      path: '/admin',
      name: 'adminPage',
      component: AdminPage,
    },
    {
      path: '/customer',
      name: 'customerPage',
      component: CustomerPage,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
  mode: 'history',
})
