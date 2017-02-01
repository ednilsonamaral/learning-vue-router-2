# Vue.js - Learning vue-router 2

`npm install --save vue-router`


```js  
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
```


```html  
<template>
  <div>
    <h1>Hello, world!</h1>

    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/blog">Blog</router-link>

    <router-link tag="li" to="/contact">
      <a>Contact</a>
    </router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'RouterzinhoPapai'
}
</script>
```
