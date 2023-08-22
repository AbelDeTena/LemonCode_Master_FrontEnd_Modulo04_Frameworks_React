import React from "react";

import {Props, useLoginForm, Content, Form} from "./component/index"

export const LoginPage: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const { user, error, showPassword, handleLogin, handleTogglePasswordVisibility, handleNavigation } = useLoginForm({ onLogin });

  return (
    <>       
      <Content> 
        <Form
            user={user}
            error={error}
            showPassword={showPassword}
            handleLogin={handleLogin}
            handleTogglePasswordVisibility={handleTogglePasswordVisibility}
            handleNavigation={handleNavigation}
          />
      </Content>
    </>
  );
}
