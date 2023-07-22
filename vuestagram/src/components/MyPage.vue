<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="🔍" @input="search($event.target.value)" />
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
// import { useStore } from "vuex";

export default {
  name: "MyPage",
  props: {
    one: Number,
  },
  setup() {
    // setup() = created
    // ref() : primitive 자료형 (array, object 이외의 자료형 / 엄격하지않음 / 써도 됨)
    // reactive() : array, object 자료형
    let follower = ref([]);
    let followerOrg = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((res) => {
        follower.value = res.data;
        followerOrg.value = [...res.data];
      });
    });

    const search = (e) => {
      if (e) {
        follower.value = followerOrg.value.filter((el) => {
          return el.name.indexOf(e) != -1;
        });
      } else {
        follower.value = followerOrg.value;
      }
    };

    return {
      follower,
      followerOrg,
      search,
    };
  },
  data() {
    return {};
  },
};
</script>

<style></style>
