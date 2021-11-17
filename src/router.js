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
    {
      path: "/imgList",
      name: "imgList",
      component: () => import("./components/imgList")
    },
    // {
    //   path: "/blogList",
    //   name: "blogList",
    //   component: () => import("./components/blogListapp")
    // },
    {
      path: "/blogList",
      name: "blogList",
      component: () => import("./components/blogList")
    },
    {
      path: "/blogList2",
      name: "blogList2",
      component: () => import("./components/blogList2")
    },  
    {
      path: "/blogAdd",
      name: "blogAdd",
      component: () => import("./components/blogAdd")
    },
    {
      path: "/couresOutlineAdd",
      name: "couresOutlineAdd",
      component: () => import("./components/couresOutlineAdd")
    },
    {
      path: "/cL",
      name: "couresOutlineList",
      component: () => import("./components/couresOutlineList")
    },


    
  ]
});
