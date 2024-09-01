import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/index";
import Bookdetail from "@/components/bookdetail";
import Author from "@/components/author";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "/bookdetail/:name",
      name: "bookdetail",
      component: Bookdetail,
    },
    {
      path: "/author/:author",
      name: "author",
      component: Author,
    },
  ],
});
