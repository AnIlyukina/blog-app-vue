<script setup>
import { reactive, ref } from "vue";
import axios from "axios";

import { useRouter } from 'vue-router'

let user = reactive({
  name: "",
  email: "",
  password: "",
});


const router = useRouter()
let error = ref('');

const register = async (e) => {
  e.preventDefault();

  try {
    await axios.post(
      "http://localhost:8800/api/auth/register",
      user
    );

    router.push({ path: '/'})
    console.log(response, "response");
  } catch (err) {
    error.value = err.response.data
  }
};
</script>

<template>
  <div class="auth">
    <h1 class="auth__title">Register</h1>
    <form class="auth__form">
      <input
        v-model="user.name"
        name="username"
        required
        type="text"
        placeholder="username"
      />
      <input
        v-model="user.email"
        name="email"
        required
        type="email"
        placeholder="email"
      />
      <input
        v-model="user.password"
        name="password"
        required
        type="password"
        placeholder="password"
      />
      <button @click="register">Register</button>
      <p v-show="error">{{ error }}</p>
      <span
        >Don't you have an account?
        <router-link to="/login">Login</router-link>
      </span>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
