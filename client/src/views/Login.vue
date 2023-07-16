<script setup>
import { reactive, ref } from "vue";
// import axios from "axios";
import api from "../api.js";
import { useRouter } from "vue-router";

let user = reactive({
  username: "",
  password: "",
});

const router = useRouter();
let error = ref("");

const login = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post("/auth/login", user);

    console.log(response, "response");
    localStorage.setItem("user", JSON.stringify(response.data));

    router.push({ name: "Home" });
  } catch (err) {
    console.log(err);
    error.value = err.response.data;
  }
};
</script>

<template>
  <div class="auth">
    <div class="auth__logo">
      <img src="/src/assets/image/logo.png" class="logo" alt="Logo" />
      <h1 class="title">Login</h1>
    </div>
    <form class="auth__form">
      <input v-model="user.username" type="text" placeholder="username" />
      <input v-model="user.password" type="password" placeholder="password" />
      <button @click="login">Login</button>
      <p v-show="error">{{ error }}</p>
      <span
        >Don't you have an account?
        <router-link to="/register" class="link-btn">Register</router-link>
      </span>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
