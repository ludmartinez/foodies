<template>
  <section class="bg-black text-white pt-32 px-4 pb-24">
    <img src="../../assets/images/hero_hamburger2.png" alt="hamburguesa" />
    <div class="relative z-10">
      <h1 class="font-optiedgar font-bold text-3xl leading-none">
        Cada sabor es una nueva <span class="text-black">experiencia</span>
      </h1>
      <div
        class="title-mark bg-mustard absolute w-full h-8 transform -rotate-1 bottom-0 left-0"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style lang="postcss" scoped>
section {
  background-image: url("../../assets/images/Subtract (1).svg");
  background-repeat: no-repeat;
  background-size: fill;
  background-position: right top;
}

.title-mark {
  z-index: -1;
}
</style>
