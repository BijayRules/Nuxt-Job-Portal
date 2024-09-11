<template>
  <div>
    <h1 class="th-heading">Add Blog</h1><span class="th-subheading"></span>
    <div class="th-card mt-5">
      <form>
        <div class="grid grid-cols-2 gap-5 ">
          <div class="th-form"><label for="Title">Title<sup>*</sup></label><input type="text" name="Title"
              autocomplete="off" id="Title" placeholder="Title" value=""></div>

          <div class="th-form col-span-2"><label for="Description">Description<sup>*</sup></label>
            <div id="editor"></div>

          </div>
          <div class="th-form col-span-2 flex gap-10">
            <div class="th-checkbox"><input type="checkbox" name="IsActive" id="IsActive" class="!w-auto"><label
                class="!m-0" for="IsActive">Active</label></div>
          </div>
        </div><button type="submit" class="th-btn  mt-5"><span>Submit</span></button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import "quill/dist/quill.snow.css";

onMounted(async () => {
  if (process.client) {
    const Quill = (await import("quill")).default;
    const quill = new Quill("#editor", {
      theme: "snow",
      modules: {
        toolbar: {
          container: [
            [{ 'font': [] }],        // Font family
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // Headings
            ['bold', 'italic', 'underline', 'strike'], // Text formatting
            [{ 'color': [] }, { 'background': [] }], // Text color and background color
            [{ 'script': 'sub' }, { 'script': 'super' }], // Subscript / superscript
            ['blockquote', 'code-block'], // Blockquote and code
            [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Lists
            [{ 'indent': '-1' }, { 'indent': '+1' }], // Indentation
            [{ 'align': [] }], // Alignment
            ['link', 'image', 'video'], // Links, images, and video
            ['clean'], // Clear formatting
          ],
        },
      },
    });
  }
});

definePageMeta({
  layout: 'dashboard'
});
</script>



<style>
#editor {
  max-height: 500px;
  height: 500px;
}
</style>