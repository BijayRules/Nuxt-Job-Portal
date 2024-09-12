<template>
  <div>
    <h1 class="th-heading">Add Blog</h1><span class="th-subheading"></span>
    <div class="th-card mt-5">
      <form>
        <div class="grid grid-cols-3 gap-5 ">
          <div class="th-form"><label for="Title">Title<sup>*</sup></label><input type="text" name="Title"
              autocomplete="off" id="Title" placeholder="Title" value=""></div>
          <div class="th-form"><label for="Slug">Slug<sup>*</sup></label><input type="text" name="Slug"
              autocomplete="off" id="Slug" placeholder="Slug" value=""></div>
          <div class="th-form"><label for="category__select">Select Category<sup>*</sup></label><input type="text"
              name="Select Category" autocomplete="off" id="category__select" placeholder="Select Category" value=""></div>

          <div class="th-form col-span-3"><label for="Description">Description<sup>*</sup></label>
            <!-- <div id="editor"></div> -->
            <Editor api-key="24ig8fzk18y4gtflozu1hue3rry3es8wcgkuikh4hsvjolqf" :init="{
              toolbar_mode: 'sliding',
              plugins: [
                // Core editing features
                'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                // Your account includes a free trial of TinyMCE premium features
                // Try the most popular premium features until Sep 26, 2024:
                'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'inlinecss', 'markdown',
              ],
              toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
              tinycomments_mode: 'embedded',
              tinycomments_author: 'Author name',
              mergetags_list: [
                { value: 'First.Name', title: 'First Name' },
                { value: 'Email', title: 'Email' },
              ],
              // ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
            }" />

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
// import "quill/dist/quill.snow.css";
import Editor from '@tinymce/tinymce-vue'

// onMounted(async () => {
//   if (process.client) {
//     const Quill = (await import("quill")).default;
//     const quill = new Quill("#editor", {
//       theme: "snow",
//       modules: {
//         toolbar: {
//           container: [
//             [{ 'font': [] }],        // Font family
//             [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // Headings
//             ['bold', 'italic', 'underline', 'strike'], // Text formatting
//             [{ 'color': [] }, { 'background': [] }], // Text color and background color
//             [{ 'script': 'sub' }, { 'script': 'super' }], // Subscript / superscript
//             ['blockquote', 'code-block'], // Blockquote and code
//             [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Lists
//             [{ 'indent': '-1' }, { 'indent': '+1' }], // Indentation
//             [{ 'align': [] }], // Alignment
//             ['link', 'image', 'video'], // Links, images, and video
//             ['clean'], // Clear formatting
//           ],
//         },
//       },
//     });
//   }
// });

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