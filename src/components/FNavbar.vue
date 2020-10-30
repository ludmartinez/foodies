<template>
  <nav
    :class="[
      menu || pageOffest ? 'bg-white rounded-b-3xl shadow-xl' : 'bg-transparent'
    ]"
    class="grid grid-cols-12 w-full px-4 pt-12 pb-4 md:px-10 md:pt-8 lg:px-20 z-40"
  >
    <div class="col-span-11 lg:col-span-2">
      <router-link :to="{ name: 'Home' }">
        <img src="../assets/logo.png" alt="Foodies logo" />
      </router-link>
    </div>

    <a @click="menu = !menu" class="col-span-1 flex justify-end lg:hidden">
      <img v-if="!menu" src="../assets/icons/menu.svg" alt="menu" />
      <img v-else src="../assets/icons/x.svg" alt="menu" />
    </a>

    <ul
      :class="[menu ? 'flex flex-col' : 'hidden']"
      class="menu col-span-12 lg:col-start-5 lg:col-span-6 lg:flex mx-n4 px-4 pt-6 pb-20 md:mx-n10 md:px-10 lg:p-0"
    >
      <router-link to="#about-us" class="menu-link">
        Acerca de
      </router-link>
      <router-link to="#restaurants" class="menu-link">
        Restaurantes
      </router-link>
      <router-link to="#" class="menu-link">
        Menú
      </router-link>
      <router-link to="#contact-us" class="menu-link">
        Contáctanos
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "FNavbar",

  data: () => ({
    menu: false,

    pageOffest: 0
  }),

  created() {
    window.addEventListener("scroll", this.getPageOffeset);
  },

  destroyed() {
    window.removeEventListener("scroll", this.getPageOffeset);
  },

  methods: {
    getPageOffeset() {
      this.pageOffest = window.pageYOffset;
    }
  }
};
</script>

<style lang="postcss" scoped>
.menu {
  @apply rounded-b-3xl;
}

.menu-link {
  @apply font-syne font-bold text-2xl mt-6;
}

@screen lg {
  .menu {
    @apply shadow-none;
  }

  .menu-link {
    @apply text-lg mt-0 mr-5;
  }
}
</style>
