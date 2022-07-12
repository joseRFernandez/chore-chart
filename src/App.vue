<template>
  <div class="app">
    <the-navbar></the-navbar>
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "@/views/navbar/TheNavbar";
import { getDocs, colRef } from "@/firebase";

export default {
  components: {
    TheNavbar,
  },
  mounted() {
    getDocs(colRef);
  },
};
</script>

<style lang="scss">
@import "@/sass/myStyles.scss";
</style>
