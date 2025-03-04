<template>
  <div class="mx-5 my-5">
    <h1 class="text-3xl font-bold mb-6">Posts</h1>
    <div
      v-if="postsStore.posts.length"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <PostCard
        v-for="post in postsStore.posts"
        :key="post.id"
        :post="post"
        @click="goToPost(post.id)"
      />
    </div>
    <div v-else class="text-center text-gray-800">Loading posts...</div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { usePostsStore } from "~/stores/posts";
// Make sure the component filename is exactly "PostCard.vue"
import PostCard from "../../components/Postcard.vue";

const postsStore = usePostsStore();
const router = useRouter();

const goToPost = (id) => {
  // Using router.push with error handling to catch NavigationDuplicated errors
  router.push(`/posts/${id}`).catch((err) => {
    if (err.name !== "NavigationDuplicated") {
      console.error("Navigation error:", err);
    }
  });
};

onMounted(async () => {
  await postsStore.fetchPosts();
});
</script>
