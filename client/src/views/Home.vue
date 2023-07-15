<script setup>
import { onMounted, ref,reactive, watchEffect } from "vue";

import { useRoute } from 'vue-router';

import api from '../api.js'

const route = useRoute();

let posts = reactive([]);

const getPosts = async (category) => {
  console.log(category)
  try {
    let response = await api.get('/posts', {
      params: category
    });
    return response.data
  } catch (e) {}
};

watchEffect(async() => {
  let category = route.query;
  let pos = await getPosts(category)
  Object.assign(posts, pos)
  console.log(posts, 'posts')
})

</script>

<template>
  <div class="home">
    <ul class="home__posts">
      <li v-for="post in posts" :key="post.id" class="home__post">
        <div class="img">
          <img :src="post.img" alt="post-image" />
        </div>
        <div class="content">
          <router-link class="link" :to="'/post/' + post.id">
            <h1>
              {{ post.title }}
            </h1>
            <p>{{ post.description }}</p>
            <button>Read More</button>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
