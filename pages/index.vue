<!-- pages/index.vue -->
<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-4">Welcome to Nuxt Blog</h1>
    <p class="mb-8 text-lg">Explore our collection of posts.</p>
    <NuxtLink
      to="/posts"
      class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
    >
      View Posts
    </NuxtLink>
  </div>
</template>

<script setup>
// No additional script required
</script>
