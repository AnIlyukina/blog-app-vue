<script setup>
import { ref } from "vue";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
// import '@vueup/vue-quill/dist/vue-quill.bubble.css';

const description = ref("");
</script>

<template>
  <div class="add">
    <div class="content">
      <input type="text" placeholder="Title" />
      <div class="editorContainer">
        <QuillEditor
          v-model:content="description"
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
        <input style="display: none" type="file" name="" id="file" />
        <label class="file" for="file"> Upload Image</label>
        <div class="buttons">
          <button>Save as a draft</button>
          <button>Update</button>
        </div>
      </li>

      <li class="menu__item">
        <h1>Category</h1>
        <div class="cat">
          <input type="radio" name="category" value="art" id="art" />
          <label for="art">Art</label>
        </div>

        <div class="cat">
          <input type="radio" name="category" value="science" id="science" />
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
          <input type="radio" name="category" value="cinema" id="cinema" />
          <label for="cinema">Cinema</label>
        </div>

        <div class="cat">
          <input type="radio" name="category" value="design" id="design" />
          <label for="design">Design</label>
        </div>

        <div class="cat">
          <input type="radio" name="category" value="food" id="food" />
          <label for="food">Food</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
