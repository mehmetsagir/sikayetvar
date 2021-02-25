<template>
  <div class="home">
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import Post from "@/components/Home/Post.vue";
export default {
  name: "Home",
  components: { Post },
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    }
  }
};
</script>
