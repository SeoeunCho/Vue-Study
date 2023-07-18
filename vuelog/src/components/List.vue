<template>
  <div class="container mt-4">
    <h5>{{ writeData.title }}</h5>
    <p>{{ writeData.content }}</p>
    <p>{{ writeData.data }}</p>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    writeData: Object,
  },
};
</script>

<style></style>
