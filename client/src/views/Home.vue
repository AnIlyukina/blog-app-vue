<script setup>
const posts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://mossebo.studio/wp-content/uploads/image-2.jpg",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://mossebo.studio/wp-content/uploads/image-2.jpg",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://mossebo.studio/wp-content/uploads/image-2.jpg",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://mossebo.studio/wp-content/uploads/image-2.jpg",
  },
];

</script>

<template>
  <div class="home">
    <ul class="home__posts">
      <li
        v-for="post in posts"
        :key="post.id"
        class="home__post"
      >
        <div class="img">
          <img :src="post.img" alt="post-image">
        </div>
        <div class="content">
          <router-link class='link' :to="'/post/' + post.id">
            <h1>
              {{ post.title }}
            </h1>
            <p>{{ post.desc }}</p>
            <button>Read More</button>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
