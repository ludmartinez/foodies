<template>
  <nav class="grid grid-cols-12">
    <div class="col-span-11 lg:col-span-2">
      <img src="../assets/logo.png" alt="Foodies logo" />
    </div>

    <a @click="menu = !menu" class="flex justify-end lg:hidden">
      <img v-if="!menu" src="../assets/icons/menu.svg" alt="menu" />
      <img v-else src="../assets/icons/x.svg" alt="menu" />
    </a>

    <ul
      :class="[{ hidden: !menu }, 'lg:flex']"
      class="col-span-12 lg:col-start-4 lg:col-span-8"
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
  @apply block shadow-xl rounded-b-3xl  mx-n4 px-4 pt-6 pb-16;
}

.menu-link {
  @apply font-syne font-bold text-2xl mt-6;
}

@screen md {
  .menu {
    @apply mx-n10 px-10;
  }
}

@screen lg {
  .menu {
    @apply flex shadow-none m-0 p-0;
  }
  .menu-link {
    @apply text-lg mt-0 mr-8;
  }
}
</style>
