<template>
  <a class="font-syne text-xl inline-flex">
    {{ text }}
    <img src="../assets/icons/arrow-right.svg" alt="right arrow" class="ml-4" />
  </a>
</template>

<script>
export default {
  name: "FActionBtn",

  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>
