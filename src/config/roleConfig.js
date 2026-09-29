export const roleConfig = {
  admin: {
    navigation: [
      {
        name: "Dashboard",
        path: "/dashboard",
      },
      {
        name: "Users",
        path: "/users",
      },
      {
        name: "Reports",
        path: "/reports",
      },
      {
        name: "Settings",
        path: "/settings",
      },
    ],

    permissions: [
      "dashboard",
      "users",
      "reports",
      "settings",
    ],
  },

  manager: {
    navigation: [
      {
        name: "Dashboard",
        path: "/dashboard",
      },
      {
        name: "Team",
        path: "/team",
      },
      {
        name: "Reports",
        path: "/reports",
      },
    ],

    permissions: [
      "dashboard",
      "team",
      "reports",
    ],
  },

  user: {
    navigation: [
      {
        name: "Dashboard",
        path: "/dashboard",
      },
      {
        name: "Profile",
        path: "/profile",
      },
    ],

    permissions: [
      "dashboard",
      "profile",
    ],
  },
};