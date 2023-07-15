<script setup>
import NavBar from '../components/Navbar.vue'
import FooterVue from '../components/FooterVue.vue'

</script>

<template>
  <div class="layout">
    <nav-bar/>
      <router-view></router-view>
    <footer-vue/>
  </div>
</template>

<style scoped>

.layout {
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  max-width: 1024px;
}
</style>
