<template>
  <section class="hero">
    <img
      class="mt-12 w-full"
      src="../../assets/images/hero_hamburger.png"
      alt="hamburger"
    />
    <div class="mt-10 mx-1">
      <h1 class="relative hero-title text-5xl font-bold leading-none">
        Un nuevo sabor está en la ciudad
        <span class="title-mark" />
      </h1>
      <p class="mt-8">
        Estamos a punto de descubrir un mundo lleno de sabores y de emociones
        inigualables.
      </p>
      <f-action-btn text="Encuéntranos" class="mt-8" />
    </div>
  </section>
</template>

<script>
import FActionBtn from "../../components/FActionBtn.vue";

export default {
  name: "Hero",

  components: { FActionBtn }
};
</script>

<style lang="postcss" scoped>
.hero {
  background-image: url("../../assets/images/Subtract.svg");
  background-position: left -4rem;
  background-size: contain;
  background-repeat: no-repeat;
  @apply pt-20 pb-12 px-4;
}

.title-mark {
  @apply absolute bg-mustard mx-n1 transform -rotate-1 w-56 h-12 left-0 bottom-0;
  z-index: -1;
}
</style>
