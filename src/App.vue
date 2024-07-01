<script>
import Header from "./components/Header.vue";
import HomePage from "./pages/HomePage.vue";
export default {
  components: {
    Header,
    HomePage,
  },
};
</script>

<template>
  <div class="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<style></style>
