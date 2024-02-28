import React from "react";
import {
  Home,
  Login,
  Register,
  NotFound,
} from "./elements"; // Import components from the "elements" module
import Layout from "../Layout/Layout"; // Import the Root component

import { useRoutes } from "react-router-dom";
import { Paths } from "./Paths";

const Router: React.FC = (): JSX.Element => {
  const routes = [
    {
      path: Paths.home,
      element: <Layout />,
      children: [
        {
          path: Paths.home,
          element: <Home />,
        },
        {
          path: Paths.register,
          element: <Register />,
        },
        {
          path: Paths.login,
          element: <Login />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ];

  return <>{useRoutes(routes)}</>;
};

export default Router;
