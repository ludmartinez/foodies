import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home/Index.vue")
  },
  {
    path: "/menu",
    name: "Menu",
    component: () =>
      import(/* webpackChunkName: "menu" */ "../views/Menu/Index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash
        // offset: { x: 0, y: 50 }
      };
    }
  }
});

export default router;
