<template>
  <div class="relative">
    <f-navbar class="fixed" />
    <slot />
  </div>
</template>

<script>
import FNavbar from "../components/FNavbar.vue";

export default {
  name: "MainLayout",

  components: {
    FNavbar
  }
};
</script>
