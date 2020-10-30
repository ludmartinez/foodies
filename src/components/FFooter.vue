<template>
  <footer>
    <div class="container-up">
      <router-link :to="{ name: 'Home' }">
        <img src="../assets/foodies.svg" alt="Foodies logo" />
      </router-link>
      <div class="app-links">
        <router-link to="#" class="w-32 mx-1">
          <img src="../assets/images/app_store.png" alt="App Store" />
        </router-link>
        <router-link to="#" class="w-32 mx-1">
          <img src="../assets/images/google_play.png" alt="Google Play" />
        </router-link>
      </div>
    </div>
    <ul class="links-list">
      <li class="link-item hover:bg-mustard">
        <a href="#restaurants">Conoce nuestras sucursales</a>
      </li>
      <li class="link-item hover:bg-mustard">
        <a href="#about-us">Acerca de</a>
      </li>
      <li class="link-item hover:bg-mustard">
        <a href="#restaurants">Conoce nuestras sucursales</a>
      </li>
      <li class="link-item hover:bg-mustard">
        <a href="#testimonials">¿Qué hablan de nosotros?</a>
      </li>
      <li class="link-item hover:bg-mustard">
        <a href="#contact-us">Contáctanos</a>
      </li>
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

.container-up {
  @apply flex flex-col justify-center items-center;
  @apply mb-5;
}

.container-up .app-links {
  @apply flex justify-center mt-5 w-full;
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

  .container-up {
    @apply flex flex-row justify-between items-center;
  }

  .container-up .app-links {
    @apply flex justify-end mt-0;
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

@screen lg {
  .container-up {
    @apply mx-12;
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
