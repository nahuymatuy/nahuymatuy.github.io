import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  // mode: "history",
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
      component: () => import("./components/TutorialAdd")
    },
    {
      path: "/v3",
      name: "v3",
      component: () => import("./components/v3")
    },
    {
      path: "/WordAdd",
      name: "WordAdd",
      component: () => import("./components/WordAdd")
    },
    {
      path: "/WordList",
      name: "WordList",
      component: () => import("./components/WordList")
    },
     
    {
      path: "/cardDisplay",
      name: "cardDisplay",
      component: () => import("./components/cardDisplay")
    },
  ]
});
