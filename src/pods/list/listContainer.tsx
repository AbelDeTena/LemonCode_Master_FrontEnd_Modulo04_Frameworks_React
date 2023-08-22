import React from "react";

import { OrganizationContext } from "../../core/provider/organization/organization.provider";
import { useApiList } from "./component/useApiList";
import { ListComponent } from "./component/listComponent";

export function ListPage() {
  const { organization, setOrganization } =
    React.useContext(OrganizationContext);

  const { data, loading, error, setError } = useApiList({ organization });

  return (
    <>
      <ListComponent
        organization={organization}
        setOrganization={setOrganization}
        data={data}
        loading={loading}
        error={error}
        setError={setError}
      />
    </>
  );
}


