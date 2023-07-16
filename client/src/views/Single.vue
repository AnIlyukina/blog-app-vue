<script setup>
import MenuVue from '../components/MenuVue.vue';

import moment from 'moment';

import { onMounted, ref } from 'vue';

import { useRoute, useRouter } from 'vue-router';

import api from '../api.js';

const  route = useRoute();

const  router = useRouter();

const postId = route.params.id;

const post = ref({})

const currentUser = JSON.parse(localStorage.getItem('user'));

const getPostById = async () => {
  try {
    const response = await api.get(`posts/${postId}`)
    return response.data
  } catch (e) {
    console.log(e)
  }
}

onMounted(async () => {
  post.value = await getPostById()
})

const deletePost = async () => {
  try {
    await api.delete(`posts/${postId}`)
    router.push({name: "Home"})
  } catch (e) {
    console.log(e)
  }
}


const editPost = () => {
  router.push({ name: 'Write', state: { post: {...post.value}} })
}

</script>

<template>
  <div class="single-page">
    <div class="single-page__content">
      <img v-if="post.img" :src="post.img" alt="post-image"/>

      <div class="user">
        <img v-if="post.userImg" :src="post.userImg" alt="user-logo">
        <div class="info">
          <span>{{ post.username }}</span>
          <p>Posted {{ moment(post.date).fromNow() }}</p>
        </div>
        <div 
          v-show="currentUser.username === post.username"
          class="edit">
          <img @click="editPost" src="/src/assets/image/edit.png" alt="edit">
          <img @click="deletePost" src="/src/assets/image/rubbish-bin.png" alt="delete">
        </div>
      </div>
      <h1>
        {{ post.title }}
      </h1>
      <p>
        {{ post.description }}
      </p>
    </div>
    <div class="single-page__menu">
      <menu-vue :category="post.category"/>
    </div>
  </div>
</template>

<style scoped>
</style>
