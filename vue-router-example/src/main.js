import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import CcAbout from './components/About.vue'
import CcBlog from './components/Blog.vue'
import CcContact from './components/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    component: CcAbout
  },
  {
    path: '/blog',
    component: CcBlog
  },
  {
    path: '/contact',
    component: CcContact
  }
]

const router = new VueRouter({ routes })

new Vue({
  router,
  // el: '#app',
  render: h => h(App)
}).$mount('#app')
