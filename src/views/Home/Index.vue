<template>
  <div>
    <hero />
    <about-us />
    <restaurants />
    <testimonials />
    <contact-us />
    <download />
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import AboutUs from "./AboutUs.vue";
import Restaurants from "./Restaurants.vue";
import Testimonials from "./Testimonials.vue";
import ContactUs from "./ContactUs.vue";
import Download from "./Download.vue";

export default {
  name: "Home",

  components: { Hero, AboutUs, Restaurants, Testimonials, ContactUs, Download }
};
</script>
