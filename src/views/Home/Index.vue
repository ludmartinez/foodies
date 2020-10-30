<template>
  <div>
    <hero />
    <about-us />
    <contact-us />
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import AboutUs from "./AboutUs.vue";
import ContactUs from "./ContactUs.vue";

export default {
  name: "Home",

  components: { Hero, AboutUs, ContactUs }
};
</script>
