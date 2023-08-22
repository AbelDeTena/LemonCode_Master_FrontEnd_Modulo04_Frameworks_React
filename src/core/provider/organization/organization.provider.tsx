import React from "react";

import { OrganizationContextModel } from "./model";

export const OrganizationContext =
  React.createContext<OrganizationContextModel>(null);

export const OrganizationProvider: React.FC<React.PropsWithChildren> = (
  props
) => {
  const { children } = props;
  const [organization, setOrganization] = React.useState<string>("lemoncode");

  return (
    <OrganizationContext.Provider value={{ organization, setOrganization }}>
      {children}
    </OrganizationContext.Provider>
  );
};
