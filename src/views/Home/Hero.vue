<template>
  <section
    class="hero md:flex md:justify-between md:items-start lg:items-center"
  >
    <img
      class="mt-12 md:order-last md:w-2/5 md:m-0 lg:w-2/5 lg:mt-10 xl:w-2/6"
      src="../../assets/images/hero_hamburger.png"
      alt="hamburger"
    />
    <div class="mt-10 mx-1 md:w-3/6 lg:w-3/6 lg:mt-10 md:mt-0">
      <h1
        class="relative hero-title text-4xl font-black leading-10 tracking-wide md:text-5xl"
      >
        Un nuevo
        <br />
        sabor está en
        <br />
        la ciudad
        <span class="title-mark" />
      </h1>
      <p class="mt-8 md:mt-5 tracking-wide">
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
  background-position: right -4rem;
  background-size: contain;
  background-repeat: no-repeat;
  @apply pt-20 pb-12 px-4 mb-12;
}

.title-mark {
  @apply absolute bg-mustard mx-n1 transform -rotate-1 w-56 h-12 left-0 bottom-0;
  z-index: -1;
}

@screen md {
  .hero {
    background-position: top right;
    @apply px-10 pt-32;
  }
}

@screen lg {
  .hero {
    background-position: right top;
    background-size: contain;
    @apply px-20 pt-32 pb-40;
  }

  /* .title-mark {
    @apply w-full;
  } */
}
</style>
