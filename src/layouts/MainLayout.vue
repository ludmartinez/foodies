<template>
  <div class="relative">
    <f-navbar class="fixed" />
    <slot />
    <f-footer />
  </div>
</template>

<script>
import FNavbar from "../components/FNavbar.vue";
import FFooter from "../components/FFooter.vue";

export default {
  name: "MainLayout",

  components: {
    FNavbar,
    FFooter
  }
};
</script>
