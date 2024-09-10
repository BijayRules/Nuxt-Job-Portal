<template>
  <Header />

  <article style="transition: 0.3s linear;" class=" pl-[300px]   min-h-screen flex flex-col pt-[78px]">
    <section class="th-main-content flex-1">
      <Sidebar />
      <slot />
    </section>
  </article>
</template>

<script lang="ts" setup>

</script>

<style></style>