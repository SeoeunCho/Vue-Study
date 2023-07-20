<template>
  <div>
    <Post v-for="(item, i) in postsData" :post="item" :key="i" />
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "Container",
  props: {
    postsData: Array,
  },
  components: {
    Post,
  },
};
</script>

<style></style>
