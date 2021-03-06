<template>
  <section id="contact-us">
    <div v-if="!mailSent">
      <h2>Cuéntanos tu experiencia</h2>
      <p>
        Don't miss out on our great offers & Receive deals from all our top
        restaurants via e-mail.
      </p>
      <form @submit.prevent="handleSubmit">
        <label for="name-input" id="name-label">
          Nombre y Apellido
          <input
            type="text"
            id="name-input"
            placeholder="John Doe"
            ref="name-input"
            @focus="setActive"
            @blur="setInactive"
            v-model="contactForm.name"
          />
        </label>
        <label for="email-input" id="email-label">
          Correo electrónico
          <input
            type="email"
            name=""
            id="email-input"
            ref="email-input"
            placeholder="j.doe@correo.com"
            @focus="setActive"
            @blur="setInactive"
            v-model="contactForm.email"
          />
        </label>
        <label for="message-input" id="message-label">
          Mensaje
          <textarea
            name="message"
            id="message-input"
            ref="message-input"
            rows="5"
            placeholder="El día de ahora mi experiencia fue..."
            @focus="setActive"
            @blur="setInactive"
            v-model="contactForm.message"
          ></textarea>
        </label>
        <div
          class="flex justify-center lg:row-start-3 lg:col-span-full lg:justify-end lg:items-start"
        >
          <button class="button flex flex-col items-center" type="submit">
            Enviar comentarios
            <img
              v-if="loading"
              src="../../assets/images/loading.svg"
              alt="loading"
              class="animate-spin"
            />
          </button>
        </div>
      </form>
    </div>
    <thanks v-else />
  </section>
</template>

<script>
import Thanks from "./Thanks.vue";
import contact from "../../api/contact";

export default {
  name: "ContactUs",

  components: { Thanks },

  data() {
    return {
      contactForm: {
        email: "",
        message: "",
        name: ""
      },
      loading: false,
      mailSent: false
    };
  },

  methods: {
    setActive(event) {
      this.$refs[event.target.id].parentNode.classList.add("active");
    },

    setInactive(event) {
      this.$refs[event.target.id].parentNode.classList.remove("active");
    },

    async handleSubmit() {
      try {
        this.loading = true;
        const response = await contact(this.contactForm);
        if (response.status === 200) {
          this.mailSent = true;
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
#contact-us {
  @apply bg-black text-white;
  @apply px-4 pt-16;
  padding-bottom: 358px;
}

h2 {
  @apply text-3xl font-optiedgar font-bold text-center;
  @apply leading-none;
}

p {
  @apply mt-5 px-2;
  @apply text-lg text-center text-white  opacity-100;
}

form {
  @apply flex flex-col;
  @apply mt-10;
}

label {
  @apply text-xs font-body;
  @apply mt-3;
}

input,
textarea {
  @apply bg-transparent font-body text-base w-full;
  @apply px-5 py-3 mt-1;
  border: 1px solid white;
  border-radius: 4px;
}

label.active,
label.active input,
label.active textarea {
  @apply text-mustard;
}

label.active input,
label.active textarea {
  @apply border-mustard outline-none;
}

label.error,
label.error input,
label.error textarea {
  @apply text-ketchup;
}

label.error input,
label.error textarea {
  @apply border-ketchup outline-none;
}

::placeholder {
  @apply font-body text-base;
  color: #595959;
}

@screen md {
  #contact-us {
    @apply px-16 pt-24;
    padding-bottom: 368px;
  }

  p {
    @apply w-7/12 mx-auto;
  }

  form {
    @apply mt-4;
  }
}

@screen lg {
  #contact-us {
    @apply px-40 pb-24;
  }

  form {
    @apply grid grid-cols-12 grid-rows-3 col-gap-12;
  }

  p {
    @apply w-6/12;
  }

  label {
    @apply m-0;
  }

  #name-label {
    @apply col-span-5;
  }
  #email-label {
    @apply col-span-5 row-start-2;
  }
  #message-label {
    @apply col-span-7 row-span-2;
  }

  .button {
    @apply mt-6;
  }
}
</style>
