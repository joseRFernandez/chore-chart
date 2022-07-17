<template>
  <div class="the-greet-page-wrapper">
    <greet-banner></greet-banner>
    <section class="hero is-halfheight greet-page-button-wrapper">
      <div class="hero-body is-flex is-flex-direction-column">
        <div class="greet-page-buttons">
          <button class="button is-info is-outlined">Create Account</button>
          <button class="button is-info" @click="betaLogIn">Log In</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GreetBanner from "./GreetBanner";
export default {
  name: "the-greet-page",
  components: {
    GreetBanner,
  },
  methods: {
    betaLogIn() {
      this.$swal("Take me to Log In Page!");
    },
  },
};
</script>
