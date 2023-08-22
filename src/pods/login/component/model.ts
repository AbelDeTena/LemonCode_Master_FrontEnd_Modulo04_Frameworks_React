import { ChangeEvent, FormEvent } from "react";

export interface Props {
    onLogin: ( email: string) => void
}

export interface PropsWithChildren { 
  children: React.ReactNode; 
}

export interface LoginFormValues {
    email: string;
    password: string;
}
  
export interface LoginFormErrors {
    email: {
      error: boolean;
      message: string;
    };
    password: {
      error: boolean;
      message: string;
    };
}
 
export interface LoginFormHook {
    user: LoginFormValues;
    error: LoginFormErrors;
    showPassword: boolean;
    handleLogin: (e: ChangeEvent<HTMLInputElement>) => void;
    handleTogglePasswordVisibility: () => void;
    handleNavigation: (e: FormEvent<HTMLFormElement>) => void;
  }



  