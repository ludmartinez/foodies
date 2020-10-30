<template>
  <div>
    <hero />
    <combos />
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import Combos from "./Combos.vue";

export default {
  name: "Menu",

  components: { Hero, Combos }
};
</script>
