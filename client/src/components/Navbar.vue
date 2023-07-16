<script setup>

import axios from 'axios';
import { useRouter } from 'vue-router';

const currentUser = JSON.parse(localStorage.getItem("user"))

const router = useRouter()

const logout = async () => {
  await axios.post("http://localhost:8800/api/auth/logout")
  localStorage.setItem('user', JSON.stringify(null))
  router.push({name: 'Login'})

}

</script>

<template>
  <div class="navbar">
    <div class="navbar__container">
      <div>
        <img class="navbar__logo" src="/src/assets/image/logo.png" alt="Logo">
      </div>
      <ul class="navbar__links">
        <li class="link">
          <router-link to="/?category=art">ART</router-link>
        </li>
        <li class="link">
          <router-link to="/?category=science">SCIENCE</router-link>
        </li>
        <li class="link">
          <router-link to="/?category=technology">TECHNOLOGY</router-link>
        </li>
        <li class="link">
          <router-link to="/?category=cinema">CINEMA</router-link>
        </li>
        <li class="link">
          <router-link to="/?category=design">DESIGN</router-link>
        </li>
        <li class="link">
          <router-link to="/?category=food">FOOD</router-link>
        </li>
      </ul>
      <div class="navbar__user-info">
        <span>{{currentUser ? currentUser.username : Незнакомец}}</span>
        <span @click="logout">Logout</span>
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
