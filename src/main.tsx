import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ProviderApp } from "./core/provider-app.tsx";
import { ProviderAccounts } from "./core/accounts/provider-users.tsx";
import { ProviderCompanies } from "./core/companies/provider-companies.tsx";
import App from "./App.tsx";
import "./i18next/i18n.ts";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderApp>
      <ProviderAccounts>
        <ProviderCompanies>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProviderCompanies>
      </ProviderAccounts>
    </ProviderApp>
  </StrictMode>
);
