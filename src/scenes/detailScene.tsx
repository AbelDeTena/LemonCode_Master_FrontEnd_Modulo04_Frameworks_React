import React from "react";

import { DetailsLayout } from "../layout/index";
import { DetailPage } from "../pods/index";

export const DetailScene: React.FC = () => {
  return (
    <DetailsLayout>
      <DetailPage />
    </DetailsLayout>
  );
};
