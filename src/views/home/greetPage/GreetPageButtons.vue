<template>
  <section class="hero is-halfheight greet-page-button-wrapper">
    <div class="hero-body is-flex is-flex-direction-column">
      <div class="greet-page-buttons">
        <router-link to="create-account"
          ><button
            class="button is-info is-outlined"
            @click="betaCreateAccount"
          >
            Create Account</button
          >\</router-link
        >
        <button class="button is-info">Log In</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "greet-page-buttons",
  methods: {
    betaCreateAccount() {
      this.$swal("Let's create an account!");
    },
  },
};
</script>
