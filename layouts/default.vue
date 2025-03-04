<!-- layouts/default.vue -->
<template>
  <div>
    <Header />
    <main class="min-h-screen container mx-auto px-4 py-8">
      <slot />
    </main>
    <footer class="bg-gray-200 text-center py-4">
      © 2025 Nuxt Blog. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
</script>
