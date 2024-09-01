import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/index";
import Bookdetail from "@/components/Bookdetail";
import Author from "@/components/Author";
import Authors from "@/components/Authors";
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
      name: "author",
      component: Author,
    },
    {
      path: "/demo",
      name: "demo",
      component: Demo,
    },
    {
      path: "/authors",
      name: "authors",
      component: Authors,
    },
  ],
});
