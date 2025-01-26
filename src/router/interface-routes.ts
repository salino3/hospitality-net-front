interface Routes {
  root: string;
  error404: string;
  // Private routes
  private: string;

  errorPrivate404: string;
}

export const routesApp: Routes = {
  root: "/hospitality-net-front/",
  error404: "/hospitality-net-front/*",
  // Private routes
  private: "/hospitality-net-front/private/",
  errorPrivate404: "/hospitality-net-front/private/*",
};
