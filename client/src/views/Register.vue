<script setup></script>

<template>
  <div class="auth">
    <h1 class="auth__title">Register</h1>
    <form class="auth__form">
      <input required type="text" placeholder="username">
      <input required type="email" placeholder="email">
      <input required type="password" placeholder="password">
      <button>Register</button>
      <p>This is error</p>
      <span>Don't you have an account?
        <router-link to="/login">Login</router-link>
      </span>
    </form>
  </div>
</template>

<style lang="scss" scoped>
</style>
