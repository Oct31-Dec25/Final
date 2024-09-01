import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
    },
    {
      path: "/s",
      name: "second",
      component: Second,
    },
    {
      path: "/t",
      name: "third",
      component: Third,
    },
    {
      path: "/w",
      name: "weather",
      component: Weather,
    },
    {
      path: "/i",
      name: "index",
      component: Index,
    },
  ],
});
