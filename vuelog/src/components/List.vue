<template>
  <div>
    <div class="container mt-4" v-for="(data, i) in writeData" :key="i">
      <h5>{{ data.title }}</h5>
      <p>{{ data.content }}</p>
      <p>{{ data.data }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    writeData: Array,
  },
};
</script>

<style></style>
