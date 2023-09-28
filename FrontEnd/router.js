import { Router } from "@vaadin/router";

export function initRouter() {
  const router = new Router(document.querySelector("#outlet"));

  router.setRoutes([
    {
      path: "/",
      component: "first-page",
      action: () => import("./Pages/FirstPage/FirstPage")
    },
    {
      path: "/home",
      component: "home-page", 
      action: () => import("./Pages/homePage/homePage") 
    },
    {
      path: "/Profile",
      component: "profile-page", 
      action: () => import("./Pages/profile/profile") 
    },
    {
      path: "/myEvents",
      component: "my-events", 
      action: () => import("./Pages/myEvents/myEvents") 
    }
  ]);
}


window.addEventListener("load", () => {
    initRouter();
  });