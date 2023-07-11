<script setup></script>

<template>
  <div class="auth">
    <h1 class="auth__title">Login</h1>
    <form class="auth__form">
      <input type="text" placeholder="username">
      <input type="password" placeholder="password">
      <button>Login</button>
      <p>This is error</p>
      <span>Don't you have an account?
        <router-link to="/register">Register</router-link>
      </span>
    </form>
  </div>
</template>

<style lang="scss" scoped>

</style>
