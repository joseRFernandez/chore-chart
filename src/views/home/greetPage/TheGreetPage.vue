<template>
  <div class="the-greet-page-wrapper">
    <greet-banner></greet-banner>
    <greet-page-buttons></greet-page-buttons>
  </div>
</template>

<script>
import GreetBanner from "./GreetBanner";
import GreetPageButtons from "./GreetPageButtons";
export default {
  name: "the-greet-page",
  components: {
    GreetBanner,
    GreetPageButtons,
  },
};
</script>
