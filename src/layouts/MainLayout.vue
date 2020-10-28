<template>
  <div class="px-4 pt-12 md:px-10 md:pt-8 lg:px-20 lg:pt-12 xl:px-24">
    <f-navbar />
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
