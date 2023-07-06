<template>
  <div v-if="isModal" class="black-bg">
    <div class="white-bg">
      <h4>{{ products[productIdx].title }}</h4>
      <img :src="products[productIdx].image" style="width: 100%" />
      <p>{{ products[productIdx].content }}</p>
      <input v-model.number="month" style="width: 30px" /> 개월
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
  watch: {
    month(newVal, oldVal) {
      let blank = /\s/;
      if (isNaN(newVal) || blank.exec(newVal)) {
        alert("숫자를 입력해주세요.");
        this.month = oldVal;
      }
    },
  },
  props: {
    isModal: Boolean,
    products: Array,
    productIdx: Number,
  },
  // update : 데이터가 변경되면 HTML(컴포넌트) 재렌더링
  updated() {
    if (this.month === 2) {
      alert("2개월 이상 입력가능합니다.");
      this.month = 3;
    }
  },
  methods: {
    closeModalBtn() {
      this.$emit("closeBtn");
      this.month = 1;
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
