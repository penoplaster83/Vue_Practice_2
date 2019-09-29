/* eslint-disable standard/object-curly-even-spacing */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "main" },
      component: () => import("./views/Home.vue")
    },
    {
      path: "/profile",
      name: "profile",
      meta: { layout: "main" },
      component: () => import("./views/Profile.vue")
    },
    {
      path: "/login",
      name: "login",
      meta: { layout: "empty" },
      component: () => import("./views/Login.vue")
    },
    {
      path: "/categories",
      name: "categories",
      meta: { layout: "main" },
      component: () => import("./views/Categories.vue")
    },
    {
      path: "/record",
      name: "record",
      meta: { layout: "main" },
      component: () => import("./views/Record.vue")
    },
    {
      path: "/detailrecord",
      name: "detailrecord",
      meta: { layout: "main" },
      component: () => import("./views/DetailRecord.vue")
    },
    {
      path: "/history",
      name: "history",
      meta: { layout: "main" },
      component: () => import("./views/History.vue")
    },
    {
      path: "/planning",
      name: "planning",
      meta: { layout: "main" },
      component: () => import("./views/Planning.vue")
    },
    {
      path: "/register",
      name: "register",
      meta: { layout: "empty" },
      component: () => import("./views/Register.vue")
    }
  ]
});