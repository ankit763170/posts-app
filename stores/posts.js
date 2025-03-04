// stores/posts.ts
import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [],
    postsLastFetched: 0, // timestamp for when posts were last fetched
    postDetails: {},
  }),
  actions: {
    async fetchPosts() {
      const now = Date.now();
      // Check if posts were fetched within the last 15 minutes (900,000 ms)
      if (
        this.posts.length &&
        this.postsLastFetched &&
        now - this.postsLastFetched < 900000
      ) {
        console.log("Using cached posts");
        return;
      }
      console.log("calling api");
      try {
        const config = useRuntimeConfig().public;
        const res = await $fetch(`${config.dummyJsonApi}/posts`);
        // Assuming the API returns an object with a "posts" array
        this.posts = res.posts;
        this.postsLastFetched = now;
        console.log("Fetched posts from API");
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    async fetchPostById(id) {
      const now = Date.now();
      // Check if the post details are cached and fresh (15 minutes)
      if (
        this.postDetails[id] &&
        now - this.postDetails[id].fetchedAt < 900000
      ) {
        console.log("Using cached post details for id:", id);
        return this.postDetails[id].data;
      }
      try {
        const config = useRuntimeConfig().public;
        const data = await $fetch(`${config.dummyJsonApi}/posts/${id}`);
        this.postDetails[id] = { data, fetchedAt: now };
        console.log("Fetched post details from API for id:", id);
        return data;
      } catch (error) {
        console.error(`Error fetching post ${id}:`, error);
        throw error;
      }
    },
  },
});
