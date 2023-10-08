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
    },
    {
      path: "/profile/:userId", // Use a parameter to identify the user
      component: "profile-page", 
      action: (context, commands) => {
        // Load the profile page component and pass the context parameter
        return import("./Pages/profile/profile").then((module) => {
          const profileComponent = new module.ProfilePage();
          profileComponent.userId = context.params.userId;
          profileComponent.user = userData;
          return profileComponent;
        });
      }
    },
  ]);
}


window.addEventListener("load", () => {
    initRouter();
  });