<template>
  <div>
    <button @click="goBack" class="text-blue-500 m-4 hover:underline">
      &larr; Back to Posts
    </button>
    <div v-if="post" class="bg-white p-6 m-10 rounded-10 shadow">
      <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
      <p class="mb-4">{{ post.body }}</p>
      <!-- Display tags if available -->
      <div v-if="post.tags && post.tags.length">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded mr-2 mb-2"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <div v-else class="text-center text-gray-500">Loading post details...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { usePostsStore } from "~/stores/posts";

const router = useRouter();
const route = useRoute();
const post = ref(null);
const postsStore = usePostsStore();

const loadPost = async () => {
  // Convert route param to a number (if needed by your API)
  const id = Number(route.params.id);
  // Add a console log for debugging the ID value
  console.log("Loading post with id:", id);
  post.value = await postsStore.fetchPostById(id);
};

const goBack = () => {
  router.push("/posts");
};

onMounted(() => {
  loadPost();
});
</script>
