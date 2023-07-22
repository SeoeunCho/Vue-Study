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
import { onMounted, ref, reactive, toRefs, watch, computed } from "vue";
import axios from "axios";
import { useStore } from "vuex";

export default {
  name: "MyPage",
  props: {
    one: Number,
  },
  setup(props) {
    // = created
    // ref() : primitive 자료형 (array, object 이외의 자료형 / 엄격하지않음 / 써도 됨)
    let follower = ref([]);
    // reactive() : array, object 자료형
    let test = reactive({ name: "Cho" });

    let { one } = toRefs(props);
    console.log(one.value);

    watch(one, () => {});

    let result = computed(() => {
      // created전에 실행됨
      return follower.value.length;
    });
    console.log(result.value);

    let store = useStore();
    console.log(store.state.name);

    onMounted(() => {
      axios.get("/follower.json").then((res) => {
        follower.value = res.data;
      });
    });

    return {
      follower,
      test,
    };
  },
  data() {
    return {};
  },
};
</script>

<style></style>
