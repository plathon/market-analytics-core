import React from "react";

import Topbar from "./components/wrap/Topbar";

import RegisterPage from "./pages/Signup";
import LoginPage from "./pages/Signin";
import LogoutPage from "./pages/Logout";

import ResetPasswordPage from "./pages/ResetPassword";

import HomePage from "./pages/Home";
import ProfileEditPage from "./pages/ProfileEdit";

const routes = [
  {
    path: "/",
    exact: true,
    topbar: () => <Topbar />,
    sidebar: () => <div></div>,
    main: () => <HomePage />
  },
  {
    path: "/profile",
    exact: true,
    topbar: () => <Topbar />,
    sidebar: () => <div></div>,
    main: () => <ProfileEditPage />
  },
  {
    path: "/signup",
    topbar: () => <div></div>,
    sidebar: () => <div></div>,
    main: () => <RegisterPage />
  },
  {
    path: "/signin",
    topbar: () => <div></div>,
    sidebar: () => <div></div>,
    main: () => <LoginPage />
  },
  {
    path: "/logout",
    topbar: () => <div></div>,
    sidebar: () => <div></div>,
    main: () => <LogoutPage />
  },
  {
    path: "/password/reset",
    topbar: () => <div></div>,
    sidebar: () => <div></div>,
    main: () => <ResetPasswordPage />
  }
];

export default routes;
