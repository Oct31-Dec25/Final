import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/index";
import Bookdetail from "@/components/Bookdetail";
import Author from "@/components/Author";
import Demo from "@/components/demo";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/bookdetail/:name",
      name: "bookdetail",
      component: Bookdetail,
    },
    {
      path: "/author/:author",
      name: "authors",
      component: Authors,
    },
    {
      path: "/demo",
      name: "demo",
      component: Demo,
    },
  ],
});
