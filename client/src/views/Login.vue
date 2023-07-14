<script setup>
import { reactive, ref } from "vue";
import axios from "axios";

import { useRouter } from 'vue-router'

let user = reactive({
  name: "",
  password: "",
});


const router = useRouter()
let error = ref('');

const login = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:8800/api/auth/login",
      user
    );

    console.log(response, 'response')
    localStorage.setItem('user', JSON.stringify(response.data))

    router.push({ name: 'Home'})
  } catch (err) {
    console.log(err)
    error.value = err.response.data
  }
};
</script>

<template>
  <div class="auth">
    <h1 class="auth__title">Login</h1>
    <form class="auth__form">
      <input v-model="user.name" type="text" placeholder="username">
      <input v-model="user.password" type="password" placeholder="password">
      <button @click="login">Login</button>
      <p v-show="error">{{ error }}</p>
      <span>Don't you have an account?
        <router-link to="/register">Register</router-link>
      </span>
    </form>
  </div>
</template>

<style lang="scss" scoped>

</style>
