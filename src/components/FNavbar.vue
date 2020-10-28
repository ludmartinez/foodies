<template>
  <nav
    :class="{ 'bg-white': menu }"
    class="grid grid-cols-12 w-full px-4 pt-12 md:px-10 md:pt-8 lg:px-20"
  >
    <div class="col-span-11 lg:col-span-2">
      <img src="../assets/logo.png" alt="Foodies logo" />
    </div>

    <a @click="menu = !menu" class="col-span-1 flex justify-end lg:hidden">
      <img v-if="!menu" src="../assets/icons/menu.svg" alt="menu" />
      <img v-else src="../assets/icons/x.svg" alt="menu" />
    </a>

    <ul
      :class="[menu ? 'block' : 'hidden']"
      class="menu col-span-12 lg:col-start-5 lg:col-span-6 lg:flex mx-n4 px-4 pt-6 pb-20 md:mx-n10 md:px-10 lg:p-0"
    >
      <li class="menu-link">
        <a href="#">Acerca de</a>
      </li>
      <li class="menu-link">
        <a href="#">Restaurantes</a>
      </li>
      <li class="menu-link">
        <a href="#">Menú</a>
      </li>
      <li class="menu-link">
        <a href="#">Contáctanos</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "FNavbar",

  data: () => ({
    menu: false
  })
};
</script>

<style lang="postcss" scoped>
.menu {
  @apply shadow-xl rounded-b-3xl;
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
