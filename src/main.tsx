import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ProviderApp } from "./core/provider-app.tsx";
import { ProviderAccounts } from "./core/accounts/provider-users.tsx";
import App from "./App.tsx";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderApp>
      <ProviderAccounts>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProviderAccounts>
    </ProviderApp>
  </StrictMode>
);
