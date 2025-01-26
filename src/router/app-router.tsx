import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./session-routes";
import { HomeLayout } from "../layouts";
import { routesApp } from "./interface-routes";

interface PropsRoutes {
  path: string;
  element: JSX.Element;
  visibility: "public" | "private" | "restricted" | "admin";
}

const routes: PropsRoutes[] = [
  {
    path: routesApp?.root,
    element: <HomeLayout />,
    visibility: "public",
  },

  {
    path: routesApp?.error404,
    element: <Navigate to={routesApp?.root} />,
    visibility: "public",
  },
  {
    path: routesApp?.errorPrivate404,
    element: <Navigate to={routesApp?.private} />,
    visibility: "private",
  },
];

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routes.map(({ path, element, visibility }) =>
        visibility === "public" ? (
          <Route key={path} path={routesApp?.root} element={<PublicRoutes />}>
            <Route path={path} element={element} />
          </Route>
        ) : visibility === "private" ? (
          <Route
            key={path}
            path={routesApp?.private}
            element={<PrivateRoutes />}
          >
            <Route path={path} element={element} />
          </Route>
        ) : (
          <Route
            key="error"
            path="*"
            element={<Navigate to={routesApp?.root} />}
          />
        )
      )}
    </Routes>
  );
};
