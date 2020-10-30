<template>
  <section id="about-us">
    <div class="container-left relative">
      <img
        src="../../assets/images/aGZeHyx-jfo.png"
        alt="arte culinario"
        class="w-full object-cover object-center"
      />
      <div class="slogan">
        <p class="slogan__text">
          La comida es <span class="text-mustard">nuestro arte</span>
        </p>
      </div>
    </div>
    <div class="container-right">
      <h2 class="text-2xl font-bold font-syne">¿Quién es Foodies?</h2>
      <p class="text-lg mt-6">
        Elit irure ad nulla id elit laborum nostrud mollit irure. Velit
        reprehenderit sunt nulla enim aliquip duis tempor est culpa fugiat
        consequat culpa consectetur Lorem. Reprehenderit dolore culpa irure
        eiusmod minim occaecat et id minim ullamco.
      </p>
      <f-action-btn text="Contáctanos" class="mt-6 md:mt-12" />
    </div>
  </section>
</template>

<script>
import FActionBtn from "../../components/FActionBtn.vue";

export default {
  name: "AboutUs",

  components: { FActionBtn }
};
</script>

<style lang="postcss" scoped>
.container-left img {
  height: 565px;
}

.container-left .slogan {
  background: linear-gradient(
    359.79deg,
    #040404 -13.79%,
    rgba(0, 0, 0, 0) 61.58%
  );
  @apply absolute h-full w-full top-0;
  @apply px-4 py-8;
  @apply flex justify-end items-end;
}

.slogan__text {
  @apply text-3xl font-optiedgar font-bold leading-8 text-right text-white opacity-100 uppercase;
  @apply w-11/12;
}

.container-right {
  @apply px-4 pb-6 pt-16;
}

@screen md {
  .container-left .slogan {
    @apply px-12 py-10;
  }

  .slogan__text {
    @apply w-8/12;
  }

  .container-right {
    background-image: url("../../assets/images/Vector 3.svg");
    background-size: cover;
    background-position: left bottom;
    background-repeat: no-repeat;
    @apply px-12 pb-12;
  }
}

@screen lg {
  #about-us {
    @apply grid grid-cols-2;
  }

  .container-left .slogan {
    @apply py-16;
  }

  .slogan__text {
    @apply w-full;
  }

  .container-right {
    background-size: contain;
    background-position: center;
    @apply flex flex-col justify-center;
  }
}
</style>
