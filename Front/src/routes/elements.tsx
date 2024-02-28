import React, { lazy, Suspense } from "react";

const Loadable = (Component: React.ComponentType<any>) => (props: any) => (
  <Suspense fallback={<div>...loading</div>}>
    <Component {...props} />
  </Suspense>
);


export const Home = Loadable(lazy(() => import("../pages/public/Home")));
export const Login = Loadable(lazy(() => import("../pages/public/Login")));

export const NotFound = Loadable(lazy(() => import("../pages/public/NotFound")));



export const Register = Loadable(lazy(() => import("../pages/public/Register")));
