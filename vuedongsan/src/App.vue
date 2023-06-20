<template>
  <div v-if="isModal" class="black-bg">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>내용</p>
      <button class="closeBtn" @click="isModal = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>

  <div v-for="(data, i) in products" :key="i">
    <img class="room-img" :src="data.image" />
    <h4 class="room-title" @click="showModal()">{{ data.title }}</h4>
    <p>{{ data.price }}원</p>
    <button @click="increase(i)">허위매물신고</button>
    <span> 신고수 : {{ data.count }}</span>
  </div>
</template>

<script>
import data from "./assets/oneroom.js";
export default {
  name: "App",
  data() {
    return {
      menus: ["Home", "Products", "About"],
      products: data,
      isModal: false,
    };
  },
  components: {},
  methods: {
    increase(idx) {
      this.products[idx].count++;
    },
    showModal() {
      this.isModal = true;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
.room-title,
button {
  cursor: pointer;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
