import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Register",
    path: "/register",
    component: Register,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
