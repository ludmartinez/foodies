<template>
  <section id="download" class="relative pt-56 px-4 pb-40 md:px-12 lg:pb-32">
    <div class="mockup-img">
      <img
        src="../../assets/images/Onboarding 3 Mockup.png"
        alt="Phone mockup"
        class="h-full object-cover object-left md:px-24 lg:px-0 lg:object-center"
      />
    </div>
    <div class="relative lg:col-span-2 lg:col-start-2">
      <h2 class="font-optiedgar font-bold text-3xl text-center">
        Obten más beneficios
        <br />
        Descarga nuestra App
      </h2>
      <div class="title-mark"></div>
    </div>
    <div
      class="benefits-container lg:col-start-2 lg:row-start-2 lg:col-span-2 lg:row-span-1 lg:px-10 xl:px-48"
    >
      <article class="benefit">
        <img src="../../assets/images/01.svg" alt="1" />
        <h3>Solicita Rápido</h3>
        <p>
          Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus
          eget magna aliquet ultricies.
        </p>
      </article>
      <article class="benefit">
        <img src="../../assets/images/02.svg" alt="2" />
        <h3>Fácil de Usar</h3>
        <p>
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
        </p>
      </article>
      <article class="benefit">
        <img src="../../assets/images/03.svg" alt="3" />
        <h3>Promociones Especiales</h3>
        <p>
          Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus
          eget magna aliquet ultricies.
        </p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "Download"
};
</script>

<style lang="postcss" scoped>
.mockup-img {
  @apply absolute w-full left-0;
  top: -13rem;
  height: 484px;
}

.title-mark {
  @apply absolute w-5/6  h-20 bottom-0 bg-mustard;
  @apply transform -rotate-1;
  left: 10%;
  z-index: -1;
}

.benefit {
  @apply flex flex-col justify-center;
  @apply mt-12;
}

.benefit h3,
.benefit p {
  @apply font-roboto text-center text-lg;
  @apply px-3  mt-3;
}

.benefit h3 {
  @apply font-bold text-2xl;
  @apply mt-6;
}

@screen md {
  #download {
    padding-top: 388px;
  }

  .mockup-img {
    top: -17rem;
    height: 772px;
  }

  .title-mark {
    @apply h-12;
  }

  .benefits-container {
    @apply flex flex-wrap justify-center;
    background-image: url("../../assets/images/vector-benefits.svg");
    background-repeat: no-repeat;
    background-size: 32rem;
    background-position: 54% 25%;
  }

  .benefit {
    @apply w-3/6;
  }

  @screen lg {
    #download {
      @apply pt-20 grid grid-cols-3;
    }

    .mockup-img {
      @apply w-5/6 left-0 pr-56;
      height: 1000px;
      top: -5rem;
    }
  }

  @screen xl {
    .benefits-container {

    }
  }
}
</style>
