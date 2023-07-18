<template>
  <div>
    <div class="container mt-4">
      <h4>상세페이지</h4>
      <h5>{{ writeData[$route.params.id].title }}</h5>
      <p>{{ writeData[$route.params.id].content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    writeData: Array,
  },
};
</script>

<style></style>
