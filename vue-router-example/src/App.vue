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

<style>
</style>
