import React from "react";
import { createRoot } from "react-dom/client";

import { Theme } from "./layout/index";
import { ProfileProvider } from "./core/provider/user/user.provider";
import { OrganizationProvider } from "./core/provider/organization/organization.provider";
import { Router } from "./router/index";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Theme>
      <ProfileProvider>
        <OrganizationProvider>
          <Router />
        </OrganizationProvider>
      </ProfileProvider>
    </Theme>
  </React.StrictMode>
);
