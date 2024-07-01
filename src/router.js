import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import AboutUs from "./pages/AboutUs.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about-us",
    name: "about",
    component: AboutUs,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
