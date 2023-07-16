<script setup>
import { reactive, ref } from "vue";
import axios from "axios";

import api from '../api.js'

import { useRouter } from "vue-router";

let user = reactive({
  username: "",
  email: "",
  password: "",
});

const router = useRouter();
let error = ref("");

const register = async (e) => {
  e.preventDefault();

  try {
    await api.post("/auth/register", user);

    router.push({ path: "/" });
    console.log(response, "response");
  } catch (err) {
    error.value = err.response.data;
  }
};
</script>

<template>
  <div class="auth">
    <div class="auth__logo">
      <img src="/src/assets/image/logo.png" class="logo" alt="Logo" />
      <h1 class="title">Register</h1>
    </div>
    <form class="auth__form">
      <input
        v-model="user.username"
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
        <router-link to="/login" class="link-btn">Login</router-link>
      </span>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
