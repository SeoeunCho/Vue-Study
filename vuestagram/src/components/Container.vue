<template>
  <div>
    <div v-if="step === 0">
      <Post v-for="(item, i) in postsData" :post="item" :idx="i" :key="i" />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step === 1">
      <div
        :class="`${filter} upload-image`"
        :style="{ backgroundImage: `url(${imgUrl})` }"
      ></div>
      <div class="filters">
        <FilterBox
          v-for="(item, i) in filters"
          :key="i"
          :imgUrl="imgUrl"
          :filter="item"
        >
          <!-- 1. slot 기본 -->
          <span>{{ item }}</span>

          <!-- 2. slot 네이밍이 있을때 : template 태그사용 -->
          <!-- <template v-slot:filter>{{ item }}</template> -->

          <!-- 3. slot props 문법 : 자식데이터를 부모로 전달 -->
          <!-- <template v-slot:default="data">{{ data.msg }}</template> -->
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step === 2">
      <div
        :class="`${filter} upload-image`"
        :style="{ backgroundImage: `url(${imgUrl})` }"
      ></div>
      <div class="write">
        <textarea class="write-box" v-model="content"></textarea>
        <!-- <textarea class="write-box" @input="$emit('content', $event.target.value)">문구입력...</textarea> -->
      </div>
    </div>

    <div v-if="step === 3">
      <MyPage />
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import MyPage from "./MyPage.vue";

export default {
  name: "Container",
  data() {
    return {
      content: "문구입력...",
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  watch: {
    content() {
      this.$emit("content", this.content);
    },
  },
  props: {
    postsData: Array,
    step: Number,
    imgUrl: String,
    filter: String,
  },
  components: {
    Post,
    FilterBox,
    MyPage,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
