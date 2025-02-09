interface Routes {
  root: string;
  // Private routes
  private: string;
  // Admin routes
  admin: string;
  // Error routes
  error404: string;
}

export const routesApp: Routes = {
  root: "/hospitality-net-front/",
  // Private routes
  private: "/hospitality-net-front/private/",
  // Admin routes
  admin: "/hospitality-net-front/admin/",
  // Error routes
  error404: "/hospitality-net-front/*",
};
