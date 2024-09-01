import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Second from "@/components/second";
import Third from "@/components/Third";
import Weather from "@/components/Weather";
import Index from "@/components/index";
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
  ],
});
