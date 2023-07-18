<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Vuelog</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/list">Writing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/detail">Detail</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- <router-link to="/">홈페이지</router-link>
    <router-link to="/list">리스트페이지</router-link>
    <router-link to="/detail">디테일페이지</router-link> -->

    <router-view :writeData="writeData"></router-view>

    <!-- <List :writeData="writeData"></List> -->
  </div>
</template>

<script>
import writeData from "./assets/writeData.js";
// import List from "./components/List.vue";

export default {
  name: "App",
  data() {
    return {
      writeData: writeData,
    };
  },
  components: {
    // List,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
