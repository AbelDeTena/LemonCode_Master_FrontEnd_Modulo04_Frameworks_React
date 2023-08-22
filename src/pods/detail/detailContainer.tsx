import React from "react";
import { useParams } from "react-router-dom";

import { OrganizationContext } from "../../core/provider/organization/organization.provider";
import { UseApiDetail } from "./component/useApiDetail";
import { MemberDetailComponent } from "./component/detailComponent";

export function DetailPage() {
  const { organization } = React.useContext(OrganizationContext);

  const { id } = useParams<{ id: string }>();
  const menberData = UseApiDetail({ id });

  return (
    <>
      <h1 style={{ color: "white" }}>{organization.toUpperCase()}</h1>

      <MemberDetailComponent memberData={menberData} />
    </>
  );
}
