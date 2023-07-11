<script setup></script>

<template>
  <div class="navbar">
    <div class="navbar__container">
      <div>
        <img class="navbar__logo" src="/src/assets/image/logo.png" alt="Logo">
      </div>
      <ul class="navbar__links">
        <li class="link">
          <router-link to="/?cat=art">ART</router-link>
        </li>
        <li class="link">
          <router-link to="/?cat=science">SCIENCE</router-link>
        </li>
        <li class="link">
          <router-link to="/?cat=technology">TECHNOLOGY</router-link>
        </li>
        <li class="link">
          <router-link to="/?cat=cinema">CINEMA</router-link>
        </li>
        <li class="link">
          <router-link to="/?cat=design">DESIGN</router-link>
        </li>
        <li class="link">
          <router-link to="/?cat=food">FOOD</router-link>
        </li>
      </ul>
      <div class="navbar__user-info">
        <span>John</span>
        <span>Logout</span>
        <span class="write">
          <router-link to="/write">
            Write
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
