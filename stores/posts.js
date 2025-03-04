// stores/posts.js
import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [],
    postsLastFetched: null,
    postDetails: {}, // { [id]: { data, fetchedAt } }
  }),
  actions: {
    async fetchPosts() {
      const now = Date.now();
      // If posts were fetched within the last 15 minutes (900000 ms), return cache
      if (
        this.posts.length > 0 &&
        this.postsLastFetched &&
        now - this.postsLastFetched < 900000
      ) {
        return;
      }
      try {
        const config = useRuntimeConfig().public;
        const res = await $fetch("https://dummyjson.com/posts");
        this.posts = res.posts;
        this.postsLastFetched = now;
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    async fetchPostById(id) {
      const now = Date.now();
      // Check if we have a fresh cache for this post
      if (
        this.postDetails[id] &&
        now - this.postDetails[id].fetchedAt < 900000
      ) {
        return this.postDetails[id].data;
      }
      try {
        const config = useRuntimeConfig().public;
        const data = await $fetch(`${config.dummyJsonApi}/posts/${id}`);
        this.postDetails[id] = { data, fetchedAt: now };
        return data;
      } catch (error) {
        console.error(`Error fetching post ${id}:`, error);
        throw error;
      }
    },
  },
});
