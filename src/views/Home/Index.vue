<template>
  <div>
    <hero />
    <about-us />
    <testimonials />
    <contact-us />
    <download />
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import AboutUs from "./AboutUs.vue";
import Testimonials from "./Testimonials.vue";
import ContactUs from "./ContactUs.vue";
import Download from "./Download.vue";

export default {
  name: "Home",

  components: { Hero, AboutUs, Testimonials, ContactUs, Download }
};
</script>
