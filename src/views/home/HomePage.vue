<template>
  <div>
    <div class="test-not-logged-in-div" v-if="!isLoggedIn">
      <TheGreetPage />
    </div>
    <div class="is-logged-in" v-else>
      <h2>Welcome!</h2>
    </div>
  </div>
</template>

<script>
import TheGreetPage from "./greetPage/TheGreetPage";

export default {
  name: "home-page",
  components: {
    TheGreetPage,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
};
</script>
