import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/index";
import Bookdetail from "@/components/Bookdetail";
import Authordetail from "@/components/Authordetail";
import Authorlist from "@/components/Authorslist";
import Books from "@/components/Books";
import News from "@/components/News";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
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
      path: "/authors",
      name: "authors",
      component: Authors,
    },
    {
      path: "/books",
      name: "books",
      component: Books,
    },
    {
      path: "/news",
      name: "news",
      component: News,
    },
  ],
});
