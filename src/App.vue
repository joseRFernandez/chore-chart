<template>
  <div class="app">
    <the-navbar></the-navbar>
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "@/views/navbar/TheNavbar";

export default {
  components: {
    TheNavbar,
  },
};
</script>

<style lang="scss">
@import "@/sass/myStyles.scss";
</style>
