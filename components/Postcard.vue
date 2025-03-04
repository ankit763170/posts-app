<!-- components/PostCard.vue -->
<template>
  <div
    class="border p-4 rounded hover:shadow-lg transition duration-200 cursor-pointer"
    @click="$emit('click')"
  >
    <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
    <p class="text-gray-700">
      {{ post.body.substring(0, 100)
      }}<span v-if="post.body.length > 100">...</span>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
