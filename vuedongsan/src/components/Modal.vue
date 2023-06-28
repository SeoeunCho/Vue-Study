<template>
  <div v-if="isModal" class="black-bg">
    <div class="white-bg">
      <h4>{{ products[productIdx].title }}</h4>
      <img :src="products[productIdx].image" style="width: 100%" />
      <p>{{ products[productIdx].content }}</p>
      <input v-model="month" style="width: 30px" /> 개월
      <p>
        {{ month }}개월 입력함 :
        {{ (products[productIdx].price * month).toLocaleString() }}원
      </p>
      <button @click="closeModalBtn()">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      month: 1,
    };
  },
  props: {
    isModal: Boolean,
    products: Array,
    productIdx: Number,
  },
  methods: {
    closeModalBtn() {
      this.$emit("closeBtn");
    },
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
