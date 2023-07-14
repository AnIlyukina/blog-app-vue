import { createRouter, createWebHistory } from "vue-router";

import Layout from './views/Layout.vue'
import Home from "./views/Home.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import Single from './views/Single.vue'
import Write from './views/Write.vue';


const routes = [
  {
    name: "Layout",
    path: "/",
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'post/:id',
        component: Single,
      },
      {
        path: 'write',
        component: Write,
      },
    ],
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
