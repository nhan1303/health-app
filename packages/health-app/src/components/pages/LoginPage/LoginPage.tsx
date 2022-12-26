import { useLogin } from "modules/domains/auth/hooks/useLogin";
import React from "react";
import { Button, Stack } from "ui-components";

export interface ILoginPageProps {}

export const LoginPage: React.FC<ILoginPageProps> = () => {
  const { mutate: loginMutation, isLoading } = useLogin();

  const handleLogin = () => {
    loginMutation({ username: "admin", password: "password" });
  };

  const LoginButtonSx = {
    color: "dark.500",
  };

  return (
    <Stack flex={1} alignItems="center" justifyContent="center">
      <Button
        disabled={isLoading}
        variant="contained"
        sx={LoginButtonSx}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Stack>
  );
};
