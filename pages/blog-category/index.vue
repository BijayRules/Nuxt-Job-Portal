<template>
  <div class="flex items-center justify-between">
    <h1 class="th-heading">Manage Category!</h1>
    <a href="/blog-category/create" class="th-btn">Add New Category</a>
  </div>
  <div class="th-card mt-5">
    <div class="th-table overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th class="text-center" style="width: 30px;">S.N.</th>
            <th class="text-left">Category</th>
            <th class="text-center" style="width: 130px;">Status</th>
            <th class="text-center" style="width: 130px;">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(category, i) in categories" :key="category.id">
            <td class="text-center w-[30px]">{{ i+1 }}</td>
            <td class="text-left">{{ category.name }}</td>
            <td class="text-center w-[130px]"><span class="active-status">Active</span></td>
            <td class="text-center w-[130px]">
              <div class="th-cta-btns">
                <div><button class="secondary"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                      viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path
                        d="m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z">
                      </path>
                    </svg></button></div>
                <div><button class="danger"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                      viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z">
                      </path>
                      <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                    </svg></button></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ref, onMounted } from 'vue';
import axios from 'axios';

definePageMeta({
  layout: 'dashboard'
});


const categories = ref([]);



const token = useCookie('gwt_token');
// console.log(categories);

//  Function to fetch categories
const getCategories = async () => {
  try {
    const res = await axios.get('https://genesisapi.popmanteau.com/api/v1/blog-categories', {
      headers: {
        Authorization: `Bearer ${token.value}`, // Adding Authorization header
      },
    });
    categories.value = res.data.response;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

// Fetch categories when component is mounted
onMounted(() => {
  getCategories();
});
</script>

<style></style>