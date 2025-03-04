<!-- pages/posts.vue -->
<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Posts</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PostCard
        v-for="post in postsStore.posts"
        :key="post.id"
        :post="post"
        @click="goToPost(post.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { usePostsStore } from "~/stores/posts";
import PostCard from "../components/Postcard.vue";

const postsStore = usePostsStore();
const router = useRouter();

const goToPost = (id) => {
  router.push(`/posts/${id}`);
};

onMounted(async () => {
  await postsStore.fetchPosts();
});
</script>
