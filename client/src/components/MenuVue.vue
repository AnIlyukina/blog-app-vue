<script setup>

import { toRefs, ref, watch } from 'vue';

import api from '../api.js'

const props = defineProps({
  category: String
})

const { category } = toRefs(props)

const recommendedPosts = ref([])

const getRecommendedPost = async () => {
  try {
    const response = await api.get(`/posts/?category=${category.value}`)
    return response.data
  } catch (e) {
    console.log(e)
  }
}

watch(category, async () => {
  recommendedPosts.value = await getRecommendedPost()
})

</script>

<template>
  <div class="menu">
    <h1>Other posts you may like</h1>
    <ul>
      <li
        v-for="post in recommendedPosts"
        :key="post.id"
        class="post"
      >
        <img :src="post.img" alt="post-image">
        <h2>{{ post.title }}</h2>
        <button>Read More</button>
      </li>

    </ul>

  </div>

</template>

<style scoped>

</style>
