import React from "react";

import { CenteredLayout } from "../layout/index";
import { LoginPage } from "../pods/index";
import { UserContext } from "../core/provider/user/user.provider";

export const LoginScene: React.FC = () => {
  const { setUserProfile } = React.useContext(UserContext);

  const handleLogin = (userProfile: string) => {
    setUserProfile(userProfile);
  };

  return (
    <CenteredLayout>
      <LoginPage onLogin={handleLogin} />
    </CenteredLayout>
  );
};
