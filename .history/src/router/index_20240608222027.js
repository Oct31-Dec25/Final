import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/index";
import Bookdetail from "@/components/";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "/bookdetail",
      name: "bookdetail",
      component: Bookdetail,
    },
  ],
});
