<template>
  <!-- <div class="start" :class="{ end: isModal }">
    <Modal
      :isModal="isModal"
      :products="products"
      :productIdx="productIdx"
      @closeBtn="isModal = false"
    />
  </div> -->
  <transition name="fade">
    <Modal
      :isModal="isModal"
      :products="products"
      :productIdx="productIdx"
      @closeBtn="isModal = false"
    />
  </transition>

  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>

  <Discount />

  <Card
    v-for="(item, i) in products"
    :data="item"
    :key="i"
    @openModal="openModal($event)"
    @increase="increase($event)"
  />
</template>

<script>
import productList from "./assets/oneroom.js";
import Discount from "./components/Discount.vue";
import Modal from "./components/Modal.vue";
import Card from "./components/Card.vue";

export default {
  name: "App",
  data() {
    return {
      menus: ["Home", "Products", "About"],
      products: productList,
      isModal: false,
      productIdx: 0,
    };
  },
  components: {
    Discount,
    Modal,
    Card,
  },
  methods: {
    increase(e) {
      this.products[e].count++;
    },
    openModal(e) {
      this.isModal = true;
      this.productIdx = e;
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

/* .start {
  opacity: 0;
  transition: all 0.3s;
}

.end {
  opacity: 1;
} */

.fade-enter-from {
  opacity: 0;
  /* transform: translateY(-1000px); */
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter-to {
  opacity: 1;
  /* transform: translateY(0px); */
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 0.5s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
