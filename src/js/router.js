import { createWebHistory, createRouter } from "vue-router";

function generateRoutes() {
  const pageFiles = import.meta.glob("/src/pages/*.vue");
  const routes = [];
    for (const path in pageFiles) {
    const componentName = path.split("/").pop().replace(".vue", "");
    const routePath =
      componentName === "Home" ? "/" : `/${componentName.toLowerCase()}`;
    const name = componentName;

    routes.push({
      path: routePath,
      component: pageFiles[path],
      name: name,
    });
    }

    
  return routes;
}
const basicRoutes = generateRoutes();

// Special routes defined explicitly
const routes = [
  ...basicRoutes,
  {
    path: "/resort/:resort_id",
    component: () => import("../pages/Resort.vue"),
    name: "ResortDetails",
  },
  {
    path: "/:pathMatch(.*)*", 
    component: () => import("../pages/NotFound.vue"),
    name: "NotFound",
  },
];

const historyBase = import.meta.env.MODE === 'development' ? '/' : '/Timesharesavings/';

const router = createRouter({

  history: createWebHistory(historyBase),
  routes,
});
export default router;
