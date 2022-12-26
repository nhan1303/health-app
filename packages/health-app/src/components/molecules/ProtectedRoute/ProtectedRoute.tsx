import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthUser } from "modules/domains/auth/selectors";

export interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const authUser = useSelector(selectAuthUser);
  const user = authUser?.username;

  if (!user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};
