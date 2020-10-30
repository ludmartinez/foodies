<template>
  <section
    id="testimonials"
    class="pb-16 md:relative md:px-16 md:pb-16 md:pt-32 lg:px-48"
  >
    <img
      src="../../assets/images/testimonials_bg_ketchup.png"
      alt="ketchup"
      class="hidden absolute h-full right-0 bottom-0 z-10 lg:block"
    />
    <div class="left-shape">
      <img src="../../assets/images/left_red_shape.svg" alt="red shape" />
    </div>
    <div class="right-shape">
      <img src="../../assets/images/right_red_shape.svg" alt="red shape" />
    </div>
    <hooper :settings="hooperSettings">
      <slide class="slide">
        <h3>
          “El mejor lugar para degustar en familia y amigos!”
        </h3>
        <p>
          Es el mejor lugar al que he venido con mi familia, la comida es rica,
          sirven rápido y te atienden de la mejor manera.
        </p>
      </slide>
      <slide class="slide">
        <h3>
          “In vitae consequatur ut nulla rerum vitae.”
        </h3>
        <p>
          Consequuntur enim nihil vero et est expedita eaque itaque. Aliquid
          voluptas dolor corporis animi molestiae et corrupti voluptate.
        </p>
      </slide>
      <slide class="slide">
        <h3>
          “Tempora suscipit dignissimos beatae.”
        </h3>
        <p>
          In dolores excepturi consectetur ipsa quod tenetur. Doloremque in
          temporibus provident sit minima tenetur aut totam voluptate. Sed
        </p>
      </slide>
      <slide class="slide">
        <h3>
          “Occaecati ipsam distinctio et.”
        </h3>
        <p>
          Sit enim consequuntur aut similique. Culpa nihil vero magni minima.
          Cupiditate quibusdam corrupti. Sit deleniti sit distinctio recusandae
        </p>
      </slide>
      <slide class="slide">
        <h3>
          “Ullam magnam ducimus.”
        </h3>
        <p>
          Beatae quasi omnis quae. Qui vitae porro voluptatum maiores rerum et
          qui. Doloremque beatae delectus rerum amet. Accusamus laborum ullam ut
          et.
        </p>
      </slide>
      <hooper-pagination slot="hooper-addons" mode="fraction" />
    </hooper>
  </section>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "Testimonials",

  components: { Hooper, Slide, HooperPagination },

  data() {
    return {
      hooperSettings: {
        infiniteScroll: true,
        transition: 800
      }
    };
  }
};
</script>

<style lang="postcss" scoped>
.slide {
  @apply px-4;
}

.left-shape {
  @apply hidden absolute w-24 left-0 top-0;
}

.right-shape {
  @apply hidden absolute w-32 right-0;
}

.slide h3 {
  @apply font-optiedgar font-bold text-xl text-center leading-tight;
}

.slide p {
  @apply text-lg text-center leading-snug;
  @apply px-2 mt-4;
}

@screen md {
  .left-shape,
  .right-shape {
    @apply block;
  }
}

@screen lg {
  .left-shape {
    @apply h-full w-32 left-0 top-0;
  }
  .left-shape img {
    @apply h-full object-cover;
  }

  .right-shape {
    @apply h-full right-0;
    top: 2rem;
    width: 9.5rem;
  }
  .right-shape img {
    @apply h-full object-cover;
  }
}
</style>
