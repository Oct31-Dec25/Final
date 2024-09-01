import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/index";
import Bookdetail from "@/components/Bookdetail";
import Authordetail from "@/components/Authordetail";
import Authorlist from "@/components/Authorlist";
import Booklist from "@/components/Booklist";
import News from "@/components/News";
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
      component: Authordetail,
    },

    {
      path: "/authorlist",
      name: "authorlist",
      component: Authorlist,
    },
    {
      path: "/booklist",
      name: "booklist",
      component: Booklist,
    },
    {
      path: "/booklist/:classifyitem",
      name: "booklist",
      component: Booklist,
    },
    {
      path: "/news",
      name: "news",
      component: News,
    },
    {
      path: "/demo",
      name: "demo",
      component: Demo,
    },
  ],
});
