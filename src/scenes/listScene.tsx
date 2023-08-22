import React from "react";

import { ListLayout } from "../layout/index";
import { ListPage } from "../pods/index";

export const ListScene: React.FC = () => {
  return (
    <ListLayout>
      <ListPage />
    </ListLayout>
  );
};
