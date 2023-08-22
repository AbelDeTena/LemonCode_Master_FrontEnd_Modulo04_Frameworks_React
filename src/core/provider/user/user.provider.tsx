import React from "react";

import { ProfileContextModel } from "./model";
import { LoginScene } from "../../../scenes/index";

export const UserContext = React.createContext<ProfileContextModel>(null);

export const ProfileProvider: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  const [userProfile, setUserProfile] = React.useState<string>(null);

  return (
    <>
      <UserContext.Provider value={{ userProfile, setUserProfile }}>
        {!userProfile ? <LoginScene /> : <>{children}</>}
      </UserContext.Provider>
    </>
  );
};
