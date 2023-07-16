<script setup>
import { ref, reactive, watchEffect, onMounted, watch, computed } from "vue";

import { useRoute } from 'vue-router';

import api from '../api.js'

const route = useRoute();

let posts = ref([]);

const getPosts = async (category) => {
  try {
    let response = await api.get('/posts', {
      params: category
    });
    return response.data
  } catch (e) {}
};

const category = computed(() => route.query)

onMounted(async () => {
  posts.value = await getPosts(category.value)
})


watch(category, async (value) => {
  if (value) {
    posts.value = await getPosts(category.value)
  }
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
