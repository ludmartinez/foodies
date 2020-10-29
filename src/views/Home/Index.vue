<template>
  <div>
    <hero />
    <about-us />
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import AboutUs from "./AboutUs.vue";

export default {
  name: "Home",

  components: { Hero, AboutUs }
};
</script>
