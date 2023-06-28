<template>
  <div>
    <img class="room-img" :src="data.image" />
    <h4 class="room-title" @click="openModal()">{{ data.title }}</h4>
    <p>{{ data.price.toLocaleString() }}원</p>
    <button @click="increase()">허위매물신고</button>
    <span> 신고수 : {{ data.count }}</span>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    data: Object,
  },
  methods: {
    openModal() {
      this.$emit("openModal", this.data.id);
    },
    increase() {
      this.$emit("increase", this.data.id);
    },
  },
};
</script>

<style>
.room-title {
  cursor: pointer;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
