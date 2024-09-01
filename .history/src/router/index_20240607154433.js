import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Second from "@/components/second";
import Third from "@/components/third";
import Weather from "@/components/weather";
import HomePage from "@/views/HomePage.vue";
import BookDetail from "@/components/BookDetail.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
    },
    {
      path: "/second",
      name: "second",
      component: Second,
    },
    {
      path: "/third",
      name: "third",
      component: Third,
    },
    {
      path: "/weather",
      name: "weather",
      component: Weather,
    },
    {
      path: "/home",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/books/:id",
      name: "BookDetail",
      component: BookDetail,
    },
  ],
});
