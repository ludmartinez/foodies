<template>
  <section id="combos" class="p-4 md:px-12">
    <div class="flex justify-between">
      <div class="flex items-center border border-gray-400 rounded px-2">
        <label for="search-input" class="mr-2">
          <img src="../../assets/icons/search.svg" alt="search" />
        </label>
        <input
          id="search-input"
          type="text"
          placeholder="Busca tu platillo favorito..."
          class="w-full py-2"
          v-model="query"
        />
      </div>
      <button>
        <img src="../../assets/icons/sliders.svg" alt="sliders" />
      </button>
    </div>
    <div
      class="mt-12 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-gap-3"
    >
      <article v-for="menu in menus" :key="menu.id" class="mt-8">
        <img
          :src="menu.image"
          :alt="menu.name"
          class="rounded-lg object-contain w-full"
        />
        <div class="px-4">
          <h4 class="font-syne font-bold text-xl mt-3">{{ menu.name }}</h4>
          <p class="opacity-100">{{ menu.description }}</p>
          <div class="mt-5 flex justify-between items-center">
            <p class="text-xl opacity-100">{{ menu.category }}</p>
            <p class="text-xl opacity-100 bg-mustard rounded-lg p-1">
              ${{ menu.price }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import categories from "../../api/categories";
import menus from "../../api/menus";

export default {
  name: "Combos",

  data() {
    return {
      category: null,
      categories: [],
      query: "",
      menus: [],
      links: null
    };
  },

  async created() {
    await this.getCategories();
    await this.getMenus();
  },

  methods: {
    async getCategories() {
      const { status, data } = await categories();
      if (status === 200) {
        this.categories = data.data;
      }
    },

    async getMenus() {
      const { status, data } = await menus(this.category, this.query);
      if (status === 200) {
        this.menus = data.data;
        this.links = data.links;
      }
    }
  }
};
</script>
