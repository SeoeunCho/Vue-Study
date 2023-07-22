<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="🔍" />
    <div class="post-header" v-for="(item, i) in follower" :key="i">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${item.image})` }"
      ></div>
      <span class="profile-name">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "MyPage",
  setup() {
    let follower = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((res) => {
        follower.value = res.data;
      });
    });

    return {
      follower,
    };
  },
  data() {
    return {};
  },
};
</script>

<style></style>
