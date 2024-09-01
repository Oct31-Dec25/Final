import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/index";
import Bookdetail from "@/components/detail";
import Test from "@/components/detail";

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
    {
      path: "/test/:author",
      name: "test",
      component: Test,
    },
  ],
});
