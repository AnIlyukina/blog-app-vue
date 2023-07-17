<script setup>
import { reactive, ref } from "vue";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
// import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import api from "../api.js";
import moment from "moment";

const state = history.state.post
console.log(state, 'state')

const post = reactive({
  title: state?.title || "",
  category: state?.category || "",
  img: null,
  description: state?.description || "",
})

const file = ref(null)
//console.log("History.state before pushState: ", history.state);


const setFile = (e) => {
  file.value = e.target.files[0]
}

const setCategory = (e) => {
  post.category = e.target.value
}

const upload = async () => {
  try {
    const formData = new FormData();
    formData.append('file', file.value)
    const response = await api.post("/upload", formData)
    return response.data
  } catch (err) {
    console.log(err)
  }
}

const savePost = async (e) => {
  e.preventDefault()
  post.img = await upload()

  try {
    if (state) {
      updatePost()
    } else {
      createPost()
    }

  } catch (err) {
    console.log(err)
  }
  
}

const createPost = async () => {
  try {
    const response = await api.post('/posts', post)
    console.log(response, 'post res')
  } catch (e) {
    console.log(e)
  }
}

const updatePost = () => {
  try {
    let response = api.put(`/posts/${state.id}`, {...post, date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")})
    console.log(response, 'put res')
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <div class="add">
    <div class="content">
      <input v-model="post.title" type="text" placeholder="Title" />
      <div class="editorContainer">
        <QuillEditor
          v-model:content="post.description"
          contentType="html"
          theme="snow"
        />
      </div>
    </div>
    <ul class="menu">
      <li class="menu__item">
        <h1>Publish</h1>
        <span> <b>Status:</b> Draft </span>
        <span> <b>Status:</b> Public </span>
        <input style="display: none" type="file" name="" id="file" multiple @change="setFile" />
        <label class="file" for="file"> Upload Image</label>
        <div class="buttons">
          <button>Save as a draft</button>
          <button @click="savePost">Update</button>
        </div>
      </li>

      <li class="menu__item">
        <h1>Category</h1>
        <div class="cat">
          <input v-model="post.category" type="radio" name="category" value="art" id="art" @change="setCategory"/>
          <label for="art">Art</label>
        </div>

        <div class="cat">
          <input v-model="post.category" type="radio" name="category" value="science" id="science" @change="setCategory"/>
          <label for="science">Science</label>
        </div>

        <div class="cat">
          <input
            v-model="post.category"
            type="radio"
            name="category"
            value="technology"
            id="technology"
          />
          <label for="technology">Technology</label>
        </div>

        <div class="cat">
          <input v-model="post.category" type="radio" name="category" value="cinema" id="cinema" @change="setCategory"/>
          <label for="cinema">Cinema</label>
        </div>

        <div class="cat">
          <input v-model="post.category" type="radio" name="category" value="design" id="design" @change="setCategory"/>
          <label for="design">Design</label>
        </div>

        <div class="cat">
          <input v-model="post.category" type="radio" name="category" value="food" id="food" @change="setCategory"/>
          <label for="food">Food</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
