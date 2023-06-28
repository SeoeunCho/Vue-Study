<template>
  <div v-if="isModal" class="black-bg">
    <div class="white-bg">
      <h4>{{ products[productIdx].title }}</h4>
      <img :src="products[productIdx].image" style="width: 100%" />
      <p>{{ products[productIdx].content }}</p>
      <p>{{ products[productIdx].price.toLocaleString() }}원</p>
      <!-- <button class="closeBtn" @click="closeModal()">닫기</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    isModal: Boolean,
    products: Array,
    productIdx: Number,
  },
  methods: {
    // closeModal() {
    //   props.isModal = false;
    // },
  },
};
</script>

<style>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

button {
  cursor: pointer;
}
</style>
