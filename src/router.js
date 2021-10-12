import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/tutorials",
      name: "tutorials",
      component: () => import("./components/TutorialsList")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddTutorial")
    },
    {
      path: "/v3",
      name: "v3",
      component: () => import("./components/v3")
    },
    {
      path: "/v4",
      name: "v4",
      component: () => import("./components/AddD2")
    },
    {
      path: "/v5",
      name: "v5",
      component: () => import("./components/AddDictionary")
    },
    {
      path: "/cardDisplay",
      name: "cardDisplay",
      component: () => import("./components/cardDisplay")
    },
    {
      path: "/v7",
      name: "v7",
      component: () => import("./components/WordList")
    } ,
  ]
});
