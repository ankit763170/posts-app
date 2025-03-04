<!-- components/Header.vue -->
<template>
  <header class="bg-blue-600 text-white py-4 shadow">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">
        <NuxtLink to="/">Nuxt Blog</NuxtLink>
      </h1>
      <nav>
        <NuxtLink to="/posts" class="hover:underline">Posts</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
// No additional script needed
</script>
