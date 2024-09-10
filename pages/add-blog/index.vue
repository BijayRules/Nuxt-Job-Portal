<template>
  <div>
    <h1 class="th-heading">Add Blog</h1><span class="th-subheading"></span>
    <div class="th-card mt-5">
      <form>
        <div class="grid grid-cols-2 gap-5 ">
          <div class="th-form"><label for="Title">Title<sup>*</sup></label><input type="text" name="Title"
              autocomplete="off" id="Title" placeholder="Title" required="" value=""></div>
         
          <div class="th-form col-span-2"><label for="Description">Description<sup>*</sup></label>
            <QuillEditor /> 
           
          </div>
          <div class="th-form col-span-2 flex gap-10">
            <div class="th-checkbox"><input type="checkbox" name="IsActive" id="IsActive" class="!w-auto"
                checked=""><label class="!m-0" for="IsActive">Active</label></div>
          </div>
        </div><button type="submit" class="th-btn  mt-5"><span>Submit</span></button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>


<style></style>