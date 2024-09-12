<template>
  <div>
    <h1 class="th-heading">Add Blog Category</h1><span class="th-subheading"></span>
    <div class="th-card mt-5">
      <form @submit.prevent="createCategory">
        <div class="grid grid-cols-2 gap-5 ">
          <div class="th-form"><label for="Title">Title<sup>*</sup></label>
            <input type="text" name="Title" id="Title" placeholder="Title" v-model="category.name">
          </div>
          <div class="th-form"><label for="Slug">Slug<sup>*</sup></label><input type="text" name="Slug" id="Slug"
              placeholder="Slug" v-model="category.slug" readonly>

          </div>

          <div class="th-form"><label for="Category Image">Category Image</label><input type="file"
              name="category Image" id="category_image" @change="handleFileChange"></div>
          <img v-if="category.image_path" :src="category.image_path" alt="Image preview"
            style="max-width: 200px; margin-top: 10px;" />
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
import { ref } from 'vue';
import axios from 'axios';


definePageMeta({
  layout: 'dashboard'
});


const category = ref({
  name: '',
  slug: '',
  image_path: ''
})

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove invalid characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+$/, ''); // Remove trailing hyphens
}

const slug = computed(() => generateSlug(category.value.name));

// Watch for changes in title to update the slug
watch(() => category.value.name, (newName) => {
  category.value.slug = generateSlug(newName);
});


const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      category.value.image_path = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
}

const createCategory = async () => {
  const token = useCookie('gwt_token');

  const form = new FormData();
  form.append('name', category.value.name);
  form.append('slug', category.value.slug);
  form.append('image_path', category.value.image_path);

  try {
    const { data } = await axios.post(
      'https://genesisapi.popmanteau.com/api/v1/blog-categories',
      form,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    alert(data.message);
  } catch (error) {
    console.error('Error creating category:', error);
    alert('Failed to create category.');
  }
};

</script>