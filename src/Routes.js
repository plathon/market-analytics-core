import React from "react";

import Sidebar from "./components/wrap/Sidebar";
import Topbar from "./components/wrap/Topbar";

import RegisterPage from "./pages/Signup";
import LoginPage from "./pages/Signin";
import LogoutPage from "./pages/Logout";

import ResetPasswordPage from "./pages/ResetPassword";

import HomePage from "./pages/Home";

const routes = [
  {
    path: "/",
    exact: true,
    topbar: () => <Topbar />,
    sidebar: () => <Sidebar />,
    main: () => <HomePage />
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
