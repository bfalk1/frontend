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
      //action: () => import("./Pages/homePage/homePage") 
      action: (context, commands) => {
        // Load the profile page component and pass the context paramete
        return import("./Pages/homePage/homePage").then((module) => {
          const homePageComponent = new module.HomePage();
          return homePageComponent;
        });
      }
    },
    {
      path: "/myEvents",
      component: "my-events", 
      //action: () => import("./Pages/myEvents/myEvents") 
      action: (context, commands) => {
        // Load the profile page component and pass the context parameter
        return import("./Pages/myEvents/myEvents").then((module) => {
          const eventPageComponent = new module.MyEventsPage();
          return eventPageComponent;
        });
      }
    },
    {
      path: "/enterpriseLogin",
      component: "enterprise-page", 
      //action: () => import("./Pages/myEvents/myEvents") 
      action: (context, commands) => {
        // Load the profile page component and pass the context parameter
        return import("./Pages/enterpriseLoginPage/enterprisePage").then((module) => {
          const enterprisePageComponent = new module.EnterprisePage();
          return enterprisePageComponent;
        });
      }
    },
    {
      path: "/createjobposting",
      component: "createjob-page", 
      //action: () => import("./Pages/myEvents/myEvents") 
      action: (context, commands) => {
        // Load the profile page component and pass the context parameter
        return import("./Pages/createJobPage/create-job").then((module) => {
          const createJobPageComponent = new module.CreateJob();
          return createJobPageComponent;
        });
      }
    },
    {
      path: "/profile/:userId", // Use a parameter to identify the user
      component: "profile-page", 
      action: (context, commands) => {
        // Load the profile page component and pass the context parameter
        return import("./Pages/profile/profile").then((module) => {
          const profileComponent = new module.ProfilePage();
          profileComponent.user = context.params.userId;
          return profileComponent;
        });
      }
    },
  ]);
}


window.addEventListener("load", () => {
    initRouter();
  });