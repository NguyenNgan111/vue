<template>
  <div id="app">
    <shopWeb />
  </div>
</template>

<script>
import shopWeb from './components/shop-website.vue'
export default {
  name: 'App',
  components: {
    shopWeb
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
#app {
  font-family: 'Roboto', sans-serif;
}
</style>
