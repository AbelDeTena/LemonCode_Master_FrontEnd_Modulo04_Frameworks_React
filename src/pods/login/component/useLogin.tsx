import { useState, ChangeEvent, FormEvent } from "react";
import {LoginFormErrors, LoginFormValues, Props, LoginFormHook } from "./model"


export const useLoginForm = ({ onLogin }: Props): LoginFormHook  => {
  const [user, setUser] = useState<LoginFormValues>({ email: "test@email.com", password: "1234" });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<LoginFormErrors>({
    email: {
      error: false,
      message: "The valid email is test@email.com",
    },
    password: {
      error: false,
      message: "The valid password is 1234",
    },
  });

  function handleNavigation(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (user.email === "test@email.com" && user.password === "1234") {
      setError({
        email: {
          error: false,
          message: "The valid email is test@email.com",
        },
        password: {
          error: false,
          message: "The valid password is 1234",
        },
      });
      onLogin(user.email);
    } else {
      setError((prevError) => ({
        email: {
          ...prevError.email,
          error: user.email !== "test@email.com",
        },
        password: {
          ...prevError.password,
          error: user.password !== "1234",
        },
      }));
    }
  }

  function handleLogin(e: ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  function handleTogglePasswordVisibility() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  return { user, error, showPassword, handleLogin, handleTogglePasswordVisibility, handleNavigation };
};


