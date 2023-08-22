import React from "react";

import { RickyLayout } from "../layout/index";
import { CharactersPage } from "../pods/index";

export const CharactersScene: React.FC = () => {
  return (
    <RickyLayout>
      <CharactersPage />
    </RickyLayout>
  );
};
