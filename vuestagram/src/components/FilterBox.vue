<template>
  <div
    :class="`${filter} filter-item`"
    :style="`background-image: url(${imgUrl})`"
    @click="fire()"
  >
    <!-- 1. slot 기본 -->
    <slot></slot>

    <!-- 2. slot 네이밍 : slot이 여러개일때 -->
    <!-- <slot name="filter"></slot> -->

    <!-- 3. slot props 문법 : 자식데이터를 부모로 전달 -->
    <!-- <slot :msg="msg"></slot> -->
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  data() {
    return {
      msg: "슬롯에서 자식데이터를 부모로 전달!",
    };
  },
  props: {
    imgUrl: String,
    filter: String,
  },
  methods: {
    fire() {
      this.emitter.emit("filter", this.filter);
    },
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
</style>
