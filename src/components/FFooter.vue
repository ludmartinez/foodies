<template>
  <footer>
    <ul class="links-list">
      <li class="link-item"><a href="#">Conoce nuestras sucursales</a></li>
      <li class="link-item"><a href="#">Acerca de</a></li>
      <li class="link-item"><a href="#">Conoce nuestras sucursales</a></li>
      <li class="link-item"><a href="#">¿Qué hablan de nosotros?</a></li>
      <li class="link-item"><a href="#">Contáctanos</a></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "FFooter"
};
</script>

<style lang="postcss" scoped>
footer {
  @apply px-4 pb-12;
}

footer .links-list {
  @apply pt-2;
  @apply flex flex-col items-center;
  border-top: 1px solid #ffc700;
}

.links-list .link-item {
  @apply font-roboto text-lg text-black opacity-50;
  @apply mt-5;
}

@screen md {
  footer {
    @apply px-6 pb-16;
  }

  footer .links-list {
    @apply grid grid-cols-3;
    @apply pt-4;
  }

  .links-list .link-item {
    @apply mt-4;
    @apply flex justify-center h-full;
  }
}

@screen xl {
  footer .links-list {
    @apply flex flex-row;
    @apply pt-6 px-8;
  }

  .links-list .link-item {
    @apply px-6;
  }
}
</style>
