interface Routes {
  root: string;
  login: string;
  // Private routes
  private: string;
  dashboard: string;
  companies: string;
  // Admin routes
  admin: string;
  // Error routes
  error404: string;
}

export const routesApp: Routes = {
  root: "/hospitality-net-front/",
  login: "/hospitality-net-front/login",
  // Private routes
  private: "/hospitality-net-front/private",
  dashboard: "/hospitality-net-front/dashboard",
  companies: "/hospitality-net-front/companies",
  // Admin routes
  admin: "/hospitality-net-front/admin",
  // Error routes
  error404: "*",
};
