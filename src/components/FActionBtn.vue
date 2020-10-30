<template>
  <router-link :to="to" class="font-syne text-xl inline-flex">
    {{ text }}
    <img src="../assets/icons/arrow-right.svg" alt="right arrow" class="ml-4" />
  </router-link>
</template>

<script>
export default {
  name: "FActionBtn",

  props: {
    text: {
      type: String,
      required: true
    },
    to: {
      required: true
    }
  }
};
</script>
