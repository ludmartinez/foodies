<template>
  <section class="hero">
    <img
      class="mt-12"
      src="../../assets/images/hero_hamburger.png"
      alt="hamburger"
    />
    <div class="mt-10">
      <h1 class="text-5xl font-bold leading-none">
        Un nuevo sabor está en
        <br />
        <span class="bg-mustard">la ciudad</span>
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style lang="postcss" scoped>
.hero {
  background-image: url("../../assets/images/Subtract.svg");
  background-position: left -4rem;
  background-size: contain;
  background-repeat: no-repeat;
  @apply pt-20 px-4;
}
</style>
