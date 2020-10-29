<template>
  <div class="relative">
    <f-navbar v-if="navbar" class="fixed" />
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
  },

  data() {
    return {
      navbar: true,

      scrollPos: 0
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (document.body.getBoundingClientRect().top > this.scrollPos) {
        this.navbar = true;
      } else {
        this.navbar = false;
      }
      this.scrollPos = document.body.getBoundingClientRect().top;
    }
  }
};
</script>
