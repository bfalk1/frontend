import { Router } from "@vaadin/router";

export function initRouter() {
  const router = new Router(document.querySelector("#outlet"));

  router.setRoutes([
    {
      path: "/",
      component: "first-page",
      action: () => import("./FirstPage")
    },
    {
      path: "/home",
      component: "home-page", 
      action: () => import("./homePage") 
    },
    {
      path: "/profile",
      component: "profile-page", 
      action: () => import("./homePage") 
    },
    {
      path: "/myEvents",
      component: "my-events", 
      action: () => import("./myEvents") 
    }
  ]);
}


window.addEventListener("load", () => {
    initRouter();
  });