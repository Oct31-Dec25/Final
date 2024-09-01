import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/index";
import Bookdetail from "@/components/detail";

const HomePage = () => import('../components/HomePage.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "/bookdetail/:id",
      name: "bookdetail",
      component: Bookdetail,
    },
  ],
});
