import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AdminRoutes, PrivateRoutes, PublicRoutes } from "./session-routes";
import { CompaniesLayout, DashboardLayout, HomeLayout } from "../layouts";
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
    path: routesApp?.dashboard,
    element: <DashboardLayout />,
    visibility: "private",
  },
  {
    path: routesApp?.companies,
    element: <CompaniesLayout />,
    visibility: "private",
  },
  {
    path: routesApp?.error404,
    element: <Navigate to={routesApp?.root} />,
    visibility: "public",
  },
  // {
  //   path: routesApp?.errorPrivate404,
  //   element: <Navigate to={routesApp?.private} />,
  //   visibility: "private",
  // },
];

function chooseRoutes(visibility: string) {
  switch (visibility) {
    case "public":
      return <PublicRoutes />;

    case "private":
      return <PrivateRoutes />;

    case "admin":
      return <AdminRoutes />;

    default:
      return (
        <Route
          key="error"
          path="*"
          element={<Navigate to={routesApp?.root} />}
        />
      );
  }
}

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routes &&
        routes?.length > 0 &&
        routes.map(({ path, element, visibility }) => {
          return (
            <Route key={path} path={path} element={chooseRoutes(visibility)}>
              <Route path={path} element={element} />
            </Route>
          );
        })}

      {/*  */}
      {/* {routes.map(({ path, element, visibility }) =>
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
      )} */}
    </Routes>
  );
};
