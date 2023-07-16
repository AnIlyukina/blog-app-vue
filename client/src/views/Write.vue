<script setup>
import { ref, reactive } from "vue";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
// import '@vueup/vue-quill/dist/vue-quill.bubble.css';

import api from "../api.js";

const newPost = reactive({
  title: "",
  category: "",
  file: null,
  description: "",
})

const file = ref(null)


const setFile = (e) => {
  newPost.file = e.target.files[0]
}

const setCategory = (e) => {
  newPost.category = e.target.value
}

const upload = async () => {
  try {
    const formData = new FormData();
    formData.append('file', newPost.file)
    const response = await api.post("/upload", formData)
    return response.data
  } catch (err) {
    console.log(err)
  }
}

const savePost = async (e) => {
  e.preventDefault()
  const imgUrl = await upload()

  try {

  } catch (err) {
    console.log(err)
  }
  
}
</script>

<template>
  <div class="add">
    <div class="content">
      <input v-model="newPost.title" type="text" placeholder="Title" />
      <div class="editorContainer">
        <QuillEditor
          v-model:content="newPost.description"
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
          <input type="radio" name="category" value="art" id="art" @change="setCategory"/>
          <label for="art">Art</label>
        </div>

        <div class="cat">
          <input type="radio" name="category" value="science" id="science" @change="setCategory"/>
          <label for="science">Science</label>
        </div>

        <div class="cat">
          <input
            type="radio"
            name="category"
            value="technology"
            id="technology"
          />
          <label for="technology">Technology</label>
        </div>

        <div class="cat">
          <input type="radio" name="category" value="cinema" id="cinema" @change="setCategory"/>
          <label for="cinema">Cinema</label>
        </div>

        <div class="cat">
          <input type="radio" name="category" value="design" id="design" @change="setCategory"/>
          <label for="design">Design</label>
        </div>

        <div class="cat">
          <input type="radio" name="category" value="food" id="food" @change="setCategory"/>
          <label for="food">Food</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
